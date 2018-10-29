/* eslint-disable-next-line */
export const sortByWeight = arr => {
  const sumElement = val => {
    return val.split('').reduce((a, b) => Number(a) + Number(b), 0);
  }
  return arr.sort((a, b) => sumElement(a) - sumElement(b));
};
