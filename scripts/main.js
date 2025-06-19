import { getRandomInt } from "./utils.js";
import { updateTime, date } from "./dateTime.js";
import { changeBackground } from "./background.js";
import { updateDisplayWeather } from "./weather.js";

const buttonTest = document.querySelector(".random-background");
buttonTest.addEventListener("click", () => changeBackground(getRandomInt(0, 23)));

updateTime();
setInterval(updateTime, 1000);
updateDisplayWeather();
changeBackground(date.getHours());
