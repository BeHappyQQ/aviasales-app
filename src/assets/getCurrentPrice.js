export const getCurrentPrice = (price) => {
  const strPrice = String(price);
  let current = '0';
  if (price > 999) {
    current = strPrice.slice(0, 1) + ' ' + strPrice.slice(1);
  }
  if (price > 10000) {
    current = strPrice.slice(0, 2) + ' ' + strPrice.slice(2);
  }
  if (price > 100000) {
    current = strPrice.slice(0, 3) + ' ' + strPrice.slice(3);
  }
  if (price > 1000000) {
    current = strPrice.slice(0, 1) + ' ' + strPrice.slice(1, 4) + ' ' + strPrice.slice(4);
  }
  return current;
};
