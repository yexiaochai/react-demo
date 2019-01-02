let isDate = function (date) {
    return date && date.getMonth;
};

//兼容小程序日期
let getDate = function(year, month, day) {
    if(!day) day = 1;
    return new Date(year, month, day);
}

let isLeapYear = function (year) {
    //传入为时间格式需要处理
    if (isDate(year)) year = year.getFullYear()
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) return true;
    return false;
};

let getDaysOfMonth = function (date) {
    var month = date.getMonth() + 1; //注意此处月份要加1
    var year = date.getFullYear();
    return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][parseInt(month) - 1];
}

let getBeginDayOfMouth = function (date) {
    var month = date.getMonth();
    var year = date.getFullYear();
    var d = getDate(year, month, 1);
    return d.getDay();
}

let getDisplayInfo = function(date) {
    if (!isDate(date)) {
      date = getDate(date)
    }
    var year = date.getFullYear();

    var month = date.getMonth();
    var d = getDate(year, month);

    //这个月一共多少天
    var days = getDaysOfMonth(d);

    //这个月是星期几开始的
    var beginWeek = getBeginDayOfMouth(d);

    return {
      year: year,
      month: month,
      days: days,
      beginWeek: beginWeek
    }
  }

  let isOverdue = function isOverdue(year, month, day) {
    let date = new Date(year, month, day);
    let now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return date.getTime() < now.getTime();
  }
  
  let isToday = function isToday(year, month, day, selectedDate) {
    let date = new Date(year, month, day);
    let d = new Date(selectedDate);
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    selectedDate = d.getTime();
    return date.getTime() == selectedDate;
  }

let dateUtils = {
    isLeapYear,
    getDaysOfMonth,
    getBeginDayOfMouth,
    getDisplayInfo,
    isOverdue,
    isToday
};

export default dateUtils;