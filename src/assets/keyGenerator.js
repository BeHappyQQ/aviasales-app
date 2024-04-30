export const generateKey = (pre) => {
  return `${pre}_${Date.now() % 0.27512}`;
};

export const generateKeyForChildren = (pre) => {
  return `${pre + new Date().getMilliseconds()}_${Date.now()}`;
};
