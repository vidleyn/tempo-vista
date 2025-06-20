import { timeOptions, dateOptions } from "./format-options";

let date = new Date();

export function updateTime() {
  const displayTime = document.querySelector(".time");
  const displayDate = document.querySelector(".date");

  displayTime.textContent = date.toLocaleTimeString("ru-RU", timeOptions);
  displayDate.textContent = date.toLocaleDateString("ru-RU", dateOptions);

  if (isNewHour()) {
    window.dispatchEvent(new Event("newHour"));
  }
}

function isNewHour() {
  let firstHourCheck;
  let secondHourCheck;

  firstHourCheck = date.getHours();
  date = new Date();
  secondHourCheck = date.getHours();

  return firstHourCheck !== secondHourCheck;
}

export { date };
