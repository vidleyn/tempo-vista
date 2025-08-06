import { getWeatherIcon } from "./icon-manager";
import { processWeatherData } from "./index";

export async function renderWeather() {
  const temperatureElement = document.querySelector(".utility__value");
  const cityElement = document.querySelector(".city");
  const weatherIconElement = document.querySelector(".weather .utility__value");
  const weatherIcons = ["sun-icon", "cloud-icon", "rain-icon", "snow-icon"];

  const { city, temperature, wmoCode } = await processWeatherData();

  if (temperatureElement) {
    temperatureElement.textContent = `${temperature}°`;
  }

  if (cityElement) {
    cityElement.textContent = `${city}`;
  }

  if (weatherIconElement) {
    weatherIconElement.classList.remove(...weatherIcons);
    weatherIconElement.classList.add(getWeatherIcon(wmoCode));
  }
}

window.addEventListener("newHour", () => {
  renderWeather();
});
