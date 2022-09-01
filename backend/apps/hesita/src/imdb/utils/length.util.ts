export const convertTimeInt = (timeString: string): number => {
  let len = 0;
  let m = false;
  let h = false;
  let minMulti = 1;
  let hourMulti = 60;
  for (let i = 0; i < timeString.length; i++) {
    let x = timeString.charAt(timeString.length - i - 1);
    if (x === ' ') continue;
    if (x === 'm') {
      m = true;
      h = false;
      continue;
    }
    if (x === 'h') {
      m = false;
      h = true;
      continue;
    }
    if (m) {
      len += parseInt(x) * minMulti;
      minMulti *= 10;
    } else if (h) {
      len += parseInt(x) * hourMulti;
      hourMulti *= 10;
    }
  }
  return len;
};
