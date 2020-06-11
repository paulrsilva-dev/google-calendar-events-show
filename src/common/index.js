export const formatDate = timestamp => {
  const day = timestamp.slice(8, 10);
  const month = timestamp.slice(5, 7);
  const year = timestamp.slice(0, 4)

  return { day, month, year };
};

export const formatTime = timestamp => {
  const hour = timestamp.slice(11, 13);
  const minute = timestamp.slice(14, 16);

  return { hour, minute };
};