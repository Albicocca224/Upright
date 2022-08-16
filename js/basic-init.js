"use strict";

var main = document.getElementById("main");
var mainbtn = document.getElementById('mainScroll');

function mainHandleButtonClick() {
  main.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

mainbtn.addEventListener('click', mainHandleButtonClick);
var about = document.getElementById("about");
var aboutbtn = document.getElementById('aboutScroll');

function aboutHandleButtonClick() {
  about.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

aboutbtn.addEventListener('click', aboutHandleButtonClick);
var courses = document.getElementById("courses");
var coursesbtn = document.getElementById('coursesScroll');

function coursesHandleButtonClick() {
  courses.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

coursesbtn.addEventListener('click', coursesHandleButtonClick);
var lectures = document.getElementById("lectures");
var lecturesbtn = document.getElementById('lecturesScroll');

function lecturesHandleButtonClick() {
  lectures.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

lecturesbtn.addEventListener('click', lecturesHandleButtonClick);
var footer = document.getElementById("footer");
var footerbtn = document.getElementById('footerScroll');

function footerHandleButtonClick() {
  footer.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

footerbtn.addEventListener('click', footerHandleButtonClick);
var achieves = document.getElementById("achieves");
var achievesbtn = document.getElementById('achievesScroll');

function achievesHandleButtonClick() {
  achieves.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

achievesbtn.addEventListener('click', achievesHandleButtonClick);
var reviews = document.getElementById("reviews");
var reviewsbtn = document.getElementById('reviewsScroll');

function reviewsHandleButtonClick() {
  reviews.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

reviewsbtn.addEventListener('click', reviewsHandleButtonClick);
var secondbtn = document.getElementById('contactScrollerSecond');

function secondHandleButtonClick() {
  footer.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
}

secondbtn.addEventListener('click', secondHandleButtonClick);

function myFunction() {
  var x = document.getElementById("nav");

  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
