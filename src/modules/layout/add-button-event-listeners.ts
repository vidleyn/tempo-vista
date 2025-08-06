import { background } from "../background";
import { city } from "../location";

export function addButtonEventListeners() {
  const changeBackgroundButton = document.querySelector(".random-background");
  const changeCityButton = document.querySelector(".change-city");

  changeBackgroundButton?.addEventListener("click", () => background.setRandom());
  changeCityButton?.addEventListener("click", () => city.changeCity());
}
