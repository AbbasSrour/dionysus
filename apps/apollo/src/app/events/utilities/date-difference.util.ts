export const dateDifferenceUtil = (date: Date): number => {
  const currentDate = new Date();
  return Math.ceil(
    (Math.abs(date.valueOf() - currentDate.valueOf()) / 1000) * 60 * 60 * 24
  );
};
