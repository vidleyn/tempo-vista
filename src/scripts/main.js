import { updateTime, date } from "./date-time";
import { changeBackground } from "./background";
import { renderWeather } from "./weather";
import { getRandomInt } from "./utils/utils.js";

updateTime();
setInterval(updateTime, 1000);
renderWeather();
changeBackground(date.getHours());

const buttonTest = document.querySelector(".random-background");
buttonTest.addEventListener("click", () => changeBackground(getRandomInt(0, 23)));
