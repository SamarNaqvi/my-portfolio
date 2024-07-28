let hamberger = document.querySelector(".hamberger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobile-nav");
let navLinks = document.querySelector(".nav-container");

hamberger.addEventListener("click", function () {
  mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});

navLinks.addEventListener("click", function () {
  mobileNav.classList.remove("open");
});

const form = document.forms["contact-form"];
const SuccessMsg = document.getElementById("successMsg");
const ErrorMsg = document.getElementById("errorMsg");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyRD3IobB8Zpums006xx2GigIqPQ4LfWL8vRybmtfsckj6Av9BJPmk29fmMe5S_Re3g/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      SuccessMsg.innerHTML = "Message Sent Successfully!";
      setTimeout(function () {
        SuccessMsg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      ErrorMsg.innerHTML = "Someting Went Wrong!";
      setTimeout(function () {
        ErrorMsg.innerHTML = "";
      }, 5000);
    });
});
