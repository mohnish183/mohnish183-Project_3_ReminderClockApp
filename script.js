//JS for clock
const messagePopUp = document.getElementById("messagePopUp");
const popUpMessage = document.getElementById("popUpMessage");
let imageChanger = document.getElementById("imageChanger");
let images = [
  "./img/morning-1.svg",
  "./img/afternoon-1.svg",
  "./img/lunch_image.jpg",
  "./img/night-1.svg",
];
const myTimeSelectMorning = document.getElementById("myTimeSelect-wakeup");
const myTimeSelectAfternoon = document.getElementById("myTimeSelect-afternoon");
const myTimeSelectEvening = document.getElementById("myTimeSelect-evening");
const myTimeSelectNight = document.getElementById("myTimeSelect-night");
//CLOCK
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h >= 6 && h <= 10) {
    messagePopUp.innerHTML = "GRAB SOME HEALTHY BREAKFAST";
  }
  if (h >= 11 && h <= 15) {
    messagePopUp.innerHTML = "Let's Have Some Lunch!!";
  }
  if (h >= 16 && h <= 19) {
    messagePopUp.innerHTML = "STOP YAWNING,GET SOME TEA...ITS JUST EVENING! ";
  }
  if (h >= 20 && h <= 5) {
    messagePopUp.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP ! ";
  }

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var hr = h;
  var min = m;
  var sec = s;
  var amPm = session;
  document.getElementById("hr").innerText = hr;
  document.getElementById("hr").textContent = hr;
  document.getElementById("min").innerText = min;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").innerText = sec;
  document.getElementById("sec").textContent = sec;
  document.getElementById("amPm").innerText = amPm;
  document.getElementById("amPm").textContent = amPm;

  setTimeout(showTime, 1000);
}

showTime();

//changing text of the button on hover
function mouseOver() {
  document.querySelector(".submit-btn").textContent = "Party Time!";
}
function mouseOut() {
  document.querySelector(".submit-btn").textContent = " Set Alarm";
}

//image change when time mathces

// const myTimeZoneEvening = document.getElementById("myTimeZoneEvening");
// const myTimeZoneNoon = document.getElementById("myTimeZoneNoon");
// const myTimeZoneMorning = document.getElementById("myTimeZoneMorning");

///////////////////////////Message pop up declaration///////////////

// function buttonSubmit() {
//   myTimeSelectMorning.addEventListener("change", () => {
//     const myTimeSelectMorning = document.getElementById(
//       "myTimeSelect-wakeup"
//     ).value;
//     let time = myTimeSelectMorning;
//     const wakeUpRemainder = document.getElementById("wakeUpRemainder");
//     // let myTimeZone = document.getElementById("myTimeZone").value;
//     wakeUpRemainder.innerHTML = `Wake Up Time : ${time}  : ${
//       Number(time) + 1
//     } `;
//     console.log(`time=${time}`);
//     setInterval(() => {
//       var date = new Date();
//       var h = date.getHours();
//       if (h == 0) {
//         h = 12;
//       }
//       if (h > 12) {
//         h = h - 12;
//       }
//       if (time == h) {
//         imageChanger.src = images[0];
//         messagePopUp.innerHTML = "GRAB SOME HEALTHY BREAKFAST";
//         popUpMessage.innerHTML = "GOOD MORNING !! WAKE UP !!";
//       }
//     }, 1000);
//   });
// }
// function buttonSubmit() {
//   myTimeSelectAfternoon.addEventListener("change", () => {
//     const myTimeSelectAfternoon = document.getElementById(
//       "myTimeSelect-afternoon"
//     ).value;
//     let time = myTimeSelectAfternoon;
//     const lunchTimeRemainder = document.getElementById("lunchTimeRemainder");
//     // let myTimeZone = document.getElementById("myTimeZone").value;
//     lunchTimeRemainder.innerHTML = `Lunch Time : ${time}  : ${
//       Number(time) + 1
//     } `;

//     console.log(`time=${time}`);

//     setInterval(() => {
//       var date = new Date();
//       var h = date.getHours();
//       if (h == 0) {
//         h = 12;
//       }
//       if (h > 12) {
//         h = h - 12;
//       }
//       if (time == h) {
//         imageChanger.src = images[1];
//         messagePopUp.innerHTML = "Let's Have Some Lunch";
//         popUpMessage.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
//       }
//     }, 1000);
//   });
// }
// function buttonSubmit() {
//   myTimeSelectEvening.addEventListener("change", () => {
//     const myTimeSelectEvening = document.getElementById(
//       "myTimeSelect-evening"
//     ).value;
//     let time = myTimeSelectEvening;
//     const napTimeRemainder = document.getElementById("napTimeRemainder");

//     napTimeRemainder.innerHTML = `Nap Time : ${time}  : ${Number(time) + 1} `;
//     console.log(`time=${time}`);
//     setInterval(() => {
//       var date = new Date();
//       var h = date.getHours();
//       if (h == 0) {
//         h = 12;
//       }
//       if (h > 12) {
//         h = h - 12;
//       }
//       if (time == h) {
//         imageChanger.src = images[2];
//         messagePopUp.innerHTML =
//           "STOP YAWNING,GET SOME TEA...ITS JUST EVENING! ";
//         popUpMessage.innerHTML = "GOOD EVENING !!";
//       }
//     }, 1000);
//   });
//   // Night event listner
// }

// myTimeSelectNight.addEventListener("change", () => {
//   function buttonSubmit() {
//     const myTimeSelectNight = document.getElementById("myTimeSelect-night");
//     let timeValue = myTimeSelectNight.value; // caontain value
//     let optionValue = myTimeSelectNight.options[timeValue];
//     const nightTimeRemainder = document.getElementById("nightTimeRemainder"); // target area

//     nightTimeRemainder.innerHTML = `Night Time : ${optionValue.text}`;
//     setInterval(() => {
//       var date = new Date();
//       var h = date.getHours();
//       if (h == 0) {
//         h = 12;
//       }
//       if (h > 12) {
//         h = h - 12;
//       }
//       if (time == h) {
//         imageChanger.src = images[3];
//         messagePopUp.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP ! ";
//         popUpMessage.innerHTML = "GOOD NIGHT !!";
//       }
//     }, 1000);
//   }
// });

function changeData() {
  let date = new Date();
  let h = date.getHours();

  setInterval(() => {
    //for morning
    if (myTimeSelectMorning.value == h) {
      imageChanger.src = images[0];
      popUpMessage.innerHTML = "GOOD MORNING !! WAKE UP !!";
    }
    //for noon
    if (myTimeSelectAfternoon.value == h) {
      imageChanger.src = images[1];
      popUpMessage.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    //for evening
    if (myTimeSelectEvening.value == h) {
      imageChanger.src = images[2];
      popUpMessage.innerHTML = "GOOD EVENING !!";
    }
    //for night
    if (myTimeSelectNight.value == h) {
      imageChanger.src = images[3];
      popUpMessage.innerHTML = "GOOD NIGHT !!";
    }
  }, 1000);
}
function buttonSubmit() {
  const morningvalue = myTimeSelectMorning.options[myTimeSelectMorning.value];
  console.log(morningvalue);

  const afternoonValue =
    myTimeSelectAfternoon.options[myTimeSelectAfternoon.value];

  const eveningValue = myTimeSelectEvening.options[myTimeSelectEvening.value];

  const nightValue = myTimeSelectNight.options[myTimeSelectNight.value];

  wakeUpRemainder.innerHTML = `Wake up time :${morningvalue.text}`;
  lunchTimeRemainder.innerHTML = `Lunch Time   : ${afternoonValue.text}`;
  napTimeRemainder.innerHTML = `Nap Time :  ${eveningValue.text}`;
  nightTimeRemainder.innerHTML = `Night Time:${nightValue.text}`;
  setInterval(changeData, 1000);
}
