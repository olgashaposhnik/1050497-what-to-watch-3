import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation, AuthorizationStatus, ActionCreator} from "./user.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  });
});

it(`Reducer update authorization status`, () => {
  expect(
      reducer(
          {
            authorizationStatus: AuthorizationStatus.NO_AUTH
          },
          {
            type: ActionType.AUTHORIZATION_REQUIRED,
            payload: AuthorizationStatus.AUTH
          }
      )
  ).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`Should make a correct API call to /login`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login({
    login: `test@test.com`,
    password: `qwerty`
  });

  apiMock.onPost(`/login`).reply(200, []);

  return login(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.AUTHORIZATION_REQUIRED,
      payload: AuthorizationStatus.AUTH
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(
        ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
    ).toEqual({
      type: ActionType.AUTHORIZATION_REQUIRED,
      payload: AuthorizationStatus.NO_AUTH
    });

    expect(
        ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)
    ).toEqual({
      type: ActionType.AUTHORIZATION_REQUIRED,
      payload: AuthorizationStatus.AUTH
    });
  });
});
