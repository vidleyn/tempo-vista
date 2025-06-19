import { date } from "../date-time";
import { timeRanges } from "./time-ranges";

export function changeBackground(currentHour) {
  const timeOfDay = determineBackground(currentHour);

  removeBackground();
  setBackground(timeOfDay);

  console.log("Background has changed");
}

function removeBackground() {
  const backgrounds = document.querySelectorAll("[data-time]");
  backgrounds.forEach((item) => item.classList.remove("background__item--showing"));
}

function setBackground(timeOfDay) {
  const backgroundElement = document.querySelector(`[data-time=${timeOfDay}]`);
  if (backgroundElement) {
    backgroundElement.classList.add("background__item--showing");
  }
}

function determineBackground(currentHour) {
  let timeOfDay;

  if (timeRanges.night.includes(currentHour)) {
    timeOfDay = "night";
  } else if (timeRanges.morning.includes(currentHour)) {
    timeOfDay = "morning";
  } else if (timeRanges.day.includes(currentHour)) {
    timeOfDay = "day";
  } else if (timeRanges.evening.includes(currentHour)) {
    timeOfDay = "evening";
  }

  return timeOfDay;
}

window.addEventListener("newHour", () => {
  changeBackground(date.getHours());
});
