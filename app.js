//Elements Selection
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minuteEl = document.querySelector("#minute");
const secondsEl = document.querySelector("#seconds");

//Countdown date (time untill this date.)
const newYear = "1 jan 2023";

// Function for calculating time.
const countdown = function () {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);

  // Converting values into a sring so that we could use padStart() funciton.

  daysEl.innerHTML = (days + "").padStart(2, 0);
  hoursEl.innerHTML = (hours + "").padStart(2, 0);
  minuteEl.innerHTML = (minutes + "").padStart(2, 0);
  secondsEl.innerHTML = (seconds + "").padStart(2, 0);
};

setInterval(countdown, 1000);
