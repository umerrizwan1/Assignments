"use strict";

/**
 * 'use strict'; statement JavaScript ko strict mode mein le ata hai, jahan pe code errors ko detect karta hai aur best practices ko follow karne mein madad karta hai.
 */

/**
 * addEventOnElements function definition
 * addEventOnElements function, multiple HTML elements par ek event listener jodne ke liye hai.
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 * Mobile ke liye navbar toggle karna
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

/**
 * toggleNavbar function definition
 * toggleNavbar function, navbar ko active/inactive karta hai, overlay ko bhi active/inactive karta hai, aur document body par ek class toggle karta hai.
 */

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

// NavTogglers par click event listener lagana
addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * Header ko active karna jab window scroll down 100px ke neeche ho
 */

const header = document.querySelector("[data-header]");

/**
 * Window par scroll hone par active header karna
 */

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * SCROLL REVEAL
 * Scroll reveal effect implement karna
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

/**
 * reveal function definition
 * reveal function, elements ko reveal karta hai jab woh screen ke andar aate hain.
 */

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

/**
 * revealDelayElements par transition delay set karna
 */

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay =
    revealDelayElements[i].dataset.revealDelay;
}

// Scroll hone par reveal function call karna
window.addEventListener("scroll", reveal);

// Page load hone par reveal function call karna
window.addEventListener("load", reveal);
