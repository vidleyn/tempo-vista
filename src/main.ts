import { date, updateTime } from "./modules/date-time";
import { background } from "./modules/background";
import { renderWeather } from "./modules/weather";
import { addButtonEventListeners } from "./modules/layout";

(function main() {
  const currentHour = date.getHours();
  const oneSecondInterval = 1000;

  addButtonEventListeners();
  updateTime();
  setInterval(updateTime, oneSecondInterval);
  renderWeather();
  background.change(currentHour);
})();
