const getGenre = (state) => {
  return state.STATE.genre;
};

const getFilmsShowedByStart = (state) => {
  return state.STATE.filmsShowedByStart;
};

export {getGenre, getFilmsShowedByStart};
