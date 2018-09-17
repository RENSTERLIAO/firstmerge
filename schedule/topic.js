var topic= [
"對湖人",
"對騎士",
"對塞爾提克",
"對雷霆",
"對76人",
"對火箭",
];

var startDate = new Date();

function setMonthAndDay(startYear,startMonth, startDay)
{
    startDate.setFullYear(startYear,startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);