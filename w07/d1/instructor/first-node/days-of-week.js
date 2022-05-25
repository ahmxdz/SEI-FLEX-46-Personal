/* eslint-disable object-shorthand */
const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const getWeekday = function (dayNo) {
  if (dayNo < 0 || dayNo > 6) dayNo = 0;

  return weekdays[dayNo];
};

module.exports = {
  weekdays: weekdays,
  getWeekday: getWeekday,
};
