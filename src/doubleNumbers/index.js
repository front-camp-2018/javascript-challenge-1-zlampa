/* eslint-disable-next-line */
export const doubleNum = num => {
  const str = String(num);
  const halfLength = str.length/2;
  const firstPart = str.substr(0, halfLength);
  const secondPart = str.substr(halfLength);
  if (halfLength >= 1 && firstPart === secondPart) {
    return num;
  } else {
    return num * 2;
  }
};
