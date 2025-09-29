/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const getDay = (dayStr) => {
    const d = parseInt(dayStr, 10);
    if ([11, 12, 13].includes(d)) return `${d}th`;
    const endsIn = { 1: 'st', 2: 'nd', 3: 'rd' };
    const suffix = endsIn[d % 10] || 'th';
    return `${d}${suffix}`;
  };
  const [year, monthStr, dayStr] = date.split('/'); 
  const monthNum = parseInt(monthStr, 10);
  const monthName = monthNames[monthNum - 1]; 
  const dayWithEnd = getDay(dayStr); 
  return `${monthName} ${dayWithEnd}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
