var todaysDate = dayjs().format("MM/DD/YYYY hh:mm:ss a");
var currentDayOfWeek = dayjs().format("dddd");
var displayClock = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var hour = document.getElementById("hour");
let currentHour = dayjs().format("H");
var timeColor = document.getElementsByClassName("col-8");
var savedHours = JSON.parse(localStorage.getItem("hours"));
var hours = [];
console.log(this);
console.log(currentHour);
console.log(currentDayOfWeek);
// console.log(hour.textContent);
// var rowHour = parseInt(hour);

if (savedHours) {
  hours = savedHours;
} else {
  hours = [
    { el: "hour9", btn: "btn9", time: "9", text: "" },
    { el: "hour10", btn: "btn10", time: "10", text: "" },
    { el: "hour11", btn: "btn11", time: "11", text: "" },
    { el: "hour12", btn: "btn12", time: "12", text: "" },
    { el: "hour1", btn: "btn1", time: "13", text: "" },
    { el: "hour2", btn: "btn2", time: "14", text: "" },
    { el: "hour3", btn: "btn3", time: "15", text: "" },
    { el: "hour4", btn: "btn4", time: "16", text: "" },
    { el: "hour5", btn: "btn5", time: "17", text: "" },
  ];
}

function update() {
  $(displayClock).text(dayjs().format("dddd, MMMM D"));
}

// Compares row id to current hour and sets color accordingly
function color() {
  for (let i = 0; i < hours.length; i++) {
    const el = document.getElementById(hours[i].el);
    $(el).val(hours[i].text);
    if (parseInt(currentHour) > parseInt(hours[i].time)) {
      $(el).addClass("past");
    } else if (parseInt(currentHour) === parseInt(hours[i].time)) {
      $(el).addClass("present");
    } else {
      $(el).addClass("future");
    }
  }
}
color();

// if (currentHour ===)

// function setColor() {
//   if (dayjs(hour, "h a").isValid()) {
//     $(timeBlock).addClass("past");
//   }
// }
$(".saveBtn").on("click", function (event) {
  // event.stopPropagation();
  // event.stopImmediatePropagation();
  for (let i = 0; i < hours.length; i++) {
    if (hours[i].btn === event.target.id) {
      const value = document.getElementById(hours[i].el).value;
      hours[i].text = value;
    } else {
      // hours[i].text = hour[i].text;
    }
  }
  localStorage.setItem("hours", JSON.stringify(hours));
  //(... rest of your JS code)
  console.log("event", hours);
});

update();
setInterval(update, 1000);
