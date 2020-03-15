const getRandomInteger = (min, max) => { // возвращает случайное целое число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRatingTextValue = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating <= 10) {
    return `Very good`;
  } return `Awesome`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getRandomInteger, getRatingTextValue, extend};
