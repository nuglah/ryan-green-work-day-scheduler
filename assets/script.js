var todaysDate = dayjs().format("MM/DD/YYYY hh:mm:ss a");
var currentDayOfWeek = dayjs().format("dddd");
var displayClock = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var hour = document.getElementById("hour");
let currentHour = parseInt(dayjs().format("H"));
var timeColor = document.getElementsByClassName("d-none");
console.log(this);
console.log(todaysDate);
console.log(currentDayOfWeek);
console.log(hour.textContent);
var rowHour = parseInt(hour);

var hours = {
  hour1: "9 am",
  hour2: "10 am",
  hour3: "11 am",
  hour4: "12 pm",
  hour5: "1 pm",
  hour6: "2 pm",
  hour7: "3 pm",
  hour7: "4 pm",
  hour8: "5 pm",
  hour9: "6 pm",
  hour10: "7 pm",
  hour11: "8 pm",
  hour12: "9 pm",
};

function update() {
  $(displayClock).text(dayjs().format("MMMM, D, YYYY H:mm:ss a"));
}

// Compares row id to current hour and sets color accordingly
if (currentHour === rowHour) {
  $(timeColor).addClass("present");
  // } else if (currentHour < rowHour && currentHour > rowHour - 6) {
  //   setColor(row, "green");
  // } else if (currentHour > rowHour && currentHour < rowHour + 6) {
  //   setColor(row, "lightgrey");
  // } else {
  //   setColor(row, "white");
}

$(hour).addClass("");

// if (currentHour ===)

// function setColor() {
//   if (dayjs(hour, "h a").isValid()) {
//     $(timeBlock).addClass("past");
//   }
// }

update();
setInterval(update, 1000);
