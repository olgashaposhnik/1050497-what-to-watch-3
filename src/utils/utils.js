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

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const formatTime = (time) => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - (hours * 60);
  const seconds = time % 60;
  const formatted = [
    hours.toString().padStart(2, `0`),
    minutes.toString().padStart(2, `0`),
    seconds.toString().padStart(2, `0`)
  ].join(`:`);
  return formatted;
};

export {getRandomInteger, getRatingTextValue, extend, randomDate, formatTime};
