//Variables
var jumbotronEl = $(".jumbotron");
var display3El = $(".display-3");
var leadEl = $(".lead");
var containerEl = $(".container");
var currentDayEl = $("#currentDay");
// var txt9El = $("#txt9");
// var txt10El = document.querySelector("#txt10");
// var txt11El = document.querySelector("#txt11");
// var txt12El = document.querySelector("#txt12");
// var txt13El = document.querySelector("#txt13");
// var txt14El = document.querySelector("#txt14");
// var txt15El = document.querySelector("#txt15");
// var txt16El = document.querySelector("#txt16");
// var txt17El = document.querySelector("#txt17");
// var btn9El = $("#btn9");
// var btn10El = document.querySelector("#btn10");
// var btn11El = document.querySelector("#btn11");
// var btn12El = document.querySelector("#btn12");
// var btn13El = document.querySelector("#btn13");
// var btn14El = document.querySelector("#btn14");
// var btn15El = document.querySelector("#btn15");
// var btn16El = document.querySelector("#btn16");
// var btn17El = document.querySelector("#btn17");

//Current Day
currentDayEl.textContent = moment().format("dddd, MMMM Do");

//Hour Now
var hourNow = moment().format("H");
console.log(hourNow);

//Save Text in the Local Storage
// function save9() {
//  if (hourNow < 9) {
//   localStorage.setItem("loc9", txt9El.value);
//  }
// }
// function save10() {
//  if (hourNow < 10) {
//   localStorage.setItem("loc10", txt10El.value);
//  }
// }
// function save11() {
//  if (hourNow < 11) {
//   localStorage.setItem("loc11", txt11El.value);
//  }
// }
// function save12() {
//  if (hourNow < 12) {
//   localStorage.setItem("loc12", txt12El.value);
//  }
// }
// function save13() {
//  if (hourNow < 13) {
//   localStorage.setItem("loc13", txt13El.value);
//  }
// }
// function save14() {
//  if (hourNow < 14) {
//   localStorage.setItem("loc14", txt14El.value);
//  }
// }
// function save15() {
//  if (hourNow < 15) {
//   localStorage.setItem("loc15", txt15El.value);
//  }
// }
// function save16() {
//  if (hourNow < 16) {
//   localStorage.setItem("loc16", txt16El.value);
//  }
// }
// function save17() {
//  if (hourNow < 17) {
//   localStorage.setItem("loc17", txt17El.value);
//  }
// }
// function getTime() {
//  var time = moment().hours();
//  for (var i = 9; i <= 17; i++) {
//   var timeEl = document.getElementById(i);
//   if (i == time) {
//    $(timeEl).addClass("present");
//   } else if (i > time) {
//    $(timeEl).addClass("future");
//   } else {
//    $(timeEl).addClass("past");
//   }
//  }
// }

//Get Text from the Local Storage
function get9() {
 //  var loc9Val = localStorage.getItem("loc9");
 //  txt9El.textContent = loc9Val;
 if (hourNow < 9) {
  // txt9El.classList.add("future");
  $("txt9El").addClass("future");
 } else if (hourNow == 9) {
  // txt9El.classList.add("present");
  $("txt9El").addClass("present");
 } else {
  // txt9El.classList.add("past");
  $("txt9El").addClass("past");
 }
}
// function get10() {
//  var loc10Val = localStorage.getItem("loc10");
//  txt10El.textContent = loc10Val;
//  if (hourNow < 10) {
//   txt10El.classList.add("class", "future");
//  } else if (hourNow == 10) {
//   txt10El.classList.add("class", "present");
//  } else {
//   txt10El.classList.add("class", "past");
//  }
// }
// function get11() {
//  var loc11Val = localStorage.getItem("loc11");
//  txt11El.textContent = loc11Val;
//  if (hourNow < 11) {
//   txt11El.classList.add("class", "future");
//  } else if (hourNow == 11) {
//   txt11El.classList.add("class", "present");
//  } else {
//   txt11El.classList.add("class", "past");
//  }
// }
// function get12() {
//  var loc12Val = localStorage.getItem("loc12");
//  txt12El.textContent = loc12Val;
//  if (hourNow < 12) {
//   txt12El.classList.add("class", "future");
//  } else if (hourNow == 12) {
//   txt12El.classList.add("class", "present");
//  } else {
//   txt12El.classList.add("class", "past");
//  }
// }
// function get13() {
//  var loc13Val = localStorage.getItem("loc13");
//  txt13El.textContent = loc13Val;
//  if (hourNow < 13) {
//   txt13El.classList.add("class", "future");
//  } else if (hourNow == 13) {
//   txt13El.classList.add("class", "present");
//  } else {
//   txt13El.classList.add("class", "past");
//  }
// }
// function get14() {
//  var loc14Val = localStorage.getItem("loc14");
//  txt14El.textContent = loc14Val;
//  if (hourNow < 14) {
//   txt14El.classList.add("class", "future");
//  } else if (hourNow == 14) {
//   txt14El.classList.add("class", "present");
//  } else {
//   txt14El.classList.add("class", "past");
//  }
// }
// function get15() {
//  var loc15Val = localStorage.getItem("loc15");
//  txt15El.textContent = loc15Val;
//  if (hourNow < 15) {
//   txt15El.classList.add("class", "future");
//  } else if (hourNow == 15) {
//   txt15El.classList.add("class", "present");
//  } else {
//   txt15El.classList.add("class", "past");
//  }
// }
// function get16() {
//  var loc16Val = localStorage.getItem("loc16");
//  txt16El.textContent = loc16Val;
//  if (hourNow < 16) {
//   txt16El.classList.add("class", "future");
//  } else if (hourNow == 16) {
//   txt16El.classList.add("class", "present");
//  } else {
//   txt16El.classList.add("class", "past");
//  }
// }
// function get17() {
//  var loc17Val = localStorage.getItem("loc17");
//  txt17El.textContent = loc17Val;
//  if (hourNow < 17) {
//   txt17El.classList.add("class", "future");
//  } else if (hourNow == 17) {
//   txt17El.classList.add("class", "present");
//  } else {
//   txt17El.classList.add("class", "past");
//  }
// }

// Listeners
// btn9El.addEventListener("click", save9);
// $("#btn9").on("click",save9)
// btn10El.addEventListener("click", save10);
// btn11El.addEventListener("click", save11);
// btn12El.addEventListener("click", save12);
// btn13El.addEventListener("click", save13);
// btn14El.addEventListener("click", save14);
// btn15El.addEventListener("click", save15);
// btn16El.addEventListener("click", save16);
// btn17El.addEventListener("click", save17);
// window.addEventListener("load", get9);
// window.addEventListener("load", get10);
// window.addEventListener("load", get11);
// window.addEventListener("load", get12);
// window.addEventListener("load", get13);
// window.addEventListener("load", get14);
// window.addEventListener("load", get15);
// window.addEventListener("load", get16);
// window.addEventListener("load", get17);
// getTime();
