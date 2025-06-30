import { getWeatherIcon } from "./icon-manager";

let inputCity = "Москва";

export async function renderWeather(сity) {
  const displayTemperature = document.querySelector(".utility__value");
  const displayCity = document.querySelector(".city");

  let { temperature, city, wmoCode } = await getWeatherProcessedData(сity);
  let weatherIcon = document.querySelector(".weather .utility__value");

  displayTemperature.textContent = ``;
  displayTemperature.textContent += `${temperature}°`;

  displayCity.textContent = ``;
  displayCity.textContent += `${city}`;

  weatherIcon.classList.remove("sun-icon", "cloud-icon", "rain-icon", "snow-icon");
  weatherIcon.classList.add(getWeatherIcon(wmoCode));

  console.log("Weather has rendered");
}

export async function changeCity() {
  inputCity = prompt("Укажите город", "");
  if (!inputCity) return;

  try {
    await renderWeather(inputCity);
  } catch (error) {
    alert("Неправильно указан город");
    changeCity();
  }
}

async function getWeatherProcessedData(сity) {
  const weatherProcessedData = {};

  const coordinates = await getCoordinates(сity);
  const rawWeatherData = await fetchWeatherRawData(сity);

  let currentTemperature = Math.round(rawWeatherData.current.temperature_2m);

  weatherProcessedData.temperature = currentTemperature;
  weatherProcessedData.city = coordinates.city;
  weatherProcessedData.wmoCode = rawWeatherData.current.weather_code;

  return weatherProcessedData;
}

async function getCoordinates(сity) {
  const coordinatesRawData = await fetchCoordinatesRawData(сity);
  const coordinates = {};

  coordinates.latitude = coordinatesRawData.results[0].latitude;
  coordinates.longitude = coordinatesRawData.results[0].longitude;
  coordinates.city = coordinatesRawData.results[0].name;

  return coordinates;
}

async function fetchCoordinatesRawData(сity) {
  let coordinatesData = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${сity}&count=1&language=ru&format=json`
  );
  coordinatesData = await coordinatesData.json();
  return coordinatesData;
}

async function fetchWeatherRawData(сity) {
  const coordinates = await getCoordinates(сity);

  let weatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,precipitation,rain,showers,snowfall,weather_code,cloud_cover&timezone=Europe%2FMoscow&forecast_days=1`
  );
  weatherData = await weatherData.json();
  return weatherData;
}

window.addEventListener("newHour", () => {
  renderWeather();
});
