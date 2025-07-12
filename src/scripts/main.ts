import { updateTime, date } from "./date-time";
import { changeBackground, setRandomBackground } from "./background";
import { renderWeather, changeCity } from "./weather";

let currentCity = "Москва";

updateTime();
setInterval(updateTime, 1000);
renderWeather(currentCity);
changeBackground(date.getHours());

const changeBackgroundButton = document.querySelector(".random-background");
const changeCityButton = document.querySelector(".change-city");

if (changeBackgroundButton) changeBackgroundButton.addEventListener("click", () => setRandomBackground());
if (changeCityButton) changeCityButton.addEventListener("click", () => changeCity(currentCity));
