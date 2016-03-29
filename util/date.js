// Given a Date object, return the week of the year that the date is in.
export function weekOfYear(date) {
  const startDate = sundayOfWeek(1, date.getUTCFullYear());
  const start = new Date(date.getUTCFullYear(), 0, startDate, 0, 0, 0, 0);

  const diff = date - start;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  return Math.ceil(diff / oneWeek) + (date.getUTCDay() === 0 ? 1 : 0);
}

// Given a week number and a year, returns the day of the year of the Sunday
// in that week.
export function sundayOfWeek(weekOfYear, year) {
  const sunday = new Date(year, 0, (weekOfYear - 1) * 7, 0, 0, 0, 0);
  sunday.setUTCDate(sunday.getUTCDate() - sunday.getUTCDay());

  const start = startOfYear(new Date(year, 0, weekOfYear * 7, 0, 0, 0, 0));

  const diff = sunday - start;
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.ceil(diff / oneDay);
}

// Given a date, returns the date one millisecond before the start of the year
// of the first date.
function startOfYear(date) {
  const startOfYear = new Date(date.getTime());
  startOfYear.setUTCDate(1);
  startOfYear.setUTCMonth(0);
  startOfYear.setUTCHours(0);
  startOfYear.setUTCMinutes(0);
  startOfYear.setUTCSeconds(0);
  startOfYear.setUTCMilliseconds(-1);

  return startOfYear;
}

// Given a date, returns the date at the start of the same month.
export function startOfMonth(date) {
  const startOfMonth  = new Date(date.getTime());
  startOfMonth.setUTCDate(1);
  startOfMonth.setUTCHours(0);
  startOfMonth.setUTCMinutes(0);
  startOfMonth.setUTCSeconds(0);
  startOfMonth.setUTCMilliseconds(0);

  return startOfMonth;
}

// Given a date, returns the date at the end of the same month.
export function endOfMonth(date) {
  const endOfMonth = new Date(date.getTime());
  endOfMonth.setUTCMonth(endOfMonth.getUTCMonth() + 1);
  endOfMonth.setUTCDate(0);
  endOfMonth.setUTCHours(0);
  endOfMonth.setUTCMinutes(0);
  endOfMonth.setUTCSeconds(0);
  endOfMonth.setUTCMilliseconds(0);

  return endOfMonth;
}

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
