var displayClock = document.getElementById("currentDay");
var timeBlock = document.getElementById("time-block");
var hour = document.getElementById("hour");
let currentHour = dayjs().format("H");
var timeColor = document.getElementsByClassName("col-8");
var savedHours = JSON.parse(localStorage.getItem("hours"));
var hours = [];

// Function for the date in the jumbotron using day.js and set interval to make it stay updated.
function update() {
  $(displayClock).text(dayjs().format("dddd, MMMM D"));
}

setInterval(update, 1000);

// This if statement contains an array of objects. Checks if there is something in local stoarge and if not
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
// Function that loops through the hours array and changes the color based on if the the hout is in the past, present, or future
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
setInterval(function () {
  console.log("dfdf");
  currentHour = dayjs().format("H");
  color();
}, 60 * 1000);

// Makes the save buttons save the text to local storage.
$(".saveBtn").on("click", function (event) {
  for (let i = 0; i < hours.length; i++) {
    if (hours[i].btn === event.target.id) {
      const value = document.getElementById(hours[i].el).value;
      hours[i].text = value;
    } else {
    }
  }
  localStorage.setItem("hours", JSON.stringify(hours));
  console.log("event", hours);
});

update();
