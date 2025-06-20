import { updateTime, date } from "./date-time";
import { changeBackground, setRandomBackground } from "./background";
import { renderWeather, changeCity } from "./weather";

updateTime();
setInterval(updateTime, 1000);
renderWeather("Москва");
changeBackground(date.getHours());

const changeBackgroundButton = document.querySelector(".random-background");
changeBackgroundButton.addEventListener("click", () => setRandomBackground());

const changeCityButton = document.querySelector(".change-city");
changeCityButton.addEventListener("click", () => changeCity());
