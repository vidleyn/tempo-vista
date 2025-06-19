import { updateTime, date } from "./date-time";
import { changeBackground } from "./background";
import { updateDisplayWeather } from "./weather";

updateTime();
setInterval(updateTime, 1000);
updateDisplayWeather();
changeBackground(date.getHours());
