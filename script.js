const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["sunday","monday","tuesday","wednesday","friday","saturday"];

const allMonths = ["January","February","march","april","may","june","july","august","september","october","November","December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML =allMonths[today.getmonth()];
year.innerHTML = year.getFullYear();