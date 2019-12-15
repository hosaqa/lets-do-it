const getWeekdays = () => (['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

const getCurrentMonth = () => (new Date().getMonth());

const getMonthName = (monthIndex = getCurrentMonth()) => {
  const monthList = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  return monthList[monthIndex];
}

const getCurrentYear = () => (new Date().getFullYear());

const getDaysInMonth = (month = getCurrentMonth(), year = getCurrentYear()) => {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

const getWeek = (date = new Date()) => {
  let week = [];
    
  for (let i = 1; i <= 7; i++) {
    let first = date.getDate() - date.getDay() + i;
    let day = new Date(date.setDate(first));
    week.push(day)
  }

  return week;
}

const getCurrentDate = () => {
  return new Date().toDateString()
}

export {getWeekdays, getCurrentMonth, getMonthName, getCurrentYear, getDaysInMonth, getWeek, getCurrentDate};