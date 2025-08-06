import { timeOptions, dateOptions } from "./format-options";

const timeElement: HTMLElement = document.querySelector(".time")!;
const dateElement: HTMLElement = document.querySelector(".date")!;

export let date = new Date();

let previousHour = date.getHours();

export function updateTime() {
  date = new Date();

  if (timeElement && dateElement) {
    timeElement.textContent = date.toLocaleTimeString("ru-RU", timeOptions);
    dateElement.textContent = date.toLocaleDateString("ru-RU", dateOptions);
  }

  if (isNewHour()) {
    window.dispatchEvent(new Event("newHour"));
  }
}

function isNewHour() {
  const currentHour = date.getHours();
  if (currentHour !== previousHour) {
    previousHour = date.getHours();
    return true;
  }
  return false;
}
