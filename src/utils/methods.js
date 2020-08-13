export const getLast = (arr) => {
  return arr.pop();
};

export const getLastTitles = (arr) => {
  return arr
      .slice(Math.max(arr.length - 3, 0))
      .map(item => item.name);
};