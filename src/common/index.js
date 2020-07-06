export const checkInputDates = (start, end) => {
  if (start > end) return false;
  return true;
};
