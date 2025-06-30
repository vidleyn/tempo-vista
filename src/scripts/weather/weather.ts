import { getWeatherIcon } from "./icon-manager";

export async function renderWeather(сity: string) {
  const displayTemperature = document.querySelector(".utility__value");
  const displayCity = document.querySelector(".city");

  // TODO: turn into type

  const { temperature, city, wmoCode } = await getWeatherProcessedData(сity);
  const weatherIcon = document.querySelector(".weather .utility__value");

  if (displayTemperature) {
    displayTemperature.textContent = ``;
    displayTemperature.textContent += `${temperature}°`;
  }

  if (displayCity) {
    displayCity.textContent = ``;
    displayCity.textContent += `${city}`;
  }

  if (weatherIcon) {
    weatherIcon.classList.remove("sun-icon", "cloud-icon", "rain-icon", "snow-icon");
    weatherIcon.classList.add(getWeatherIcon(wmoCode));
  }

  console.log("Weather has rendered");
}

export async function changeCity(currentCity: string) {
  const inputCity = prompt("Укажите город", "");
  if (!inputCity) return;

  try {
    console.log(currentCity);
    currentCity = inputCity;
    console.log(currentCity);

    await renderWeather(currentCity);
  } catch (error) {
    alert("Неправильно указан город");
    changeCity(currentCity);
  }
}

async function getWeatherProcessedData(сity: string) {
  const weatherProcessedData = {};

  const coordinates = await getCoordinates(сity);
  const rawWeatherData = await fetchWeatherRawData(сity);

  let currentTemperature = Math.round(rawWeatherData.current.temperature_2m);

  weatherProcessedData.temperature = currentTemperature;
  weatherProcessedData.city = coordinates.city;
  weatherProcessedData.wmoCode = rawWeatherData.current.weather_code;

  return weatherProcessedData;
}

async function getCoordinates(сity: string) {
  const coordinatesRawData = await fetchCoordinatesRawData(сity);

  // TODO: turn coordinates into type

  const coordinates = {};

  coordinates.latitude = coordinatesRawData.results[0].latitude;
  coordinates.longitude = coordinatesRawData.results[0].longitude;
  coordinates.city = coordinatesRawData.results[0].name;

  return coordinates;
}

async function fetchCoordinatesRawData(сity: string) {
  let coordinatesData = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${сity}&count=1&language=ru&format=json`);
  coordinatesData = await coordinatesData.json();
  return coordinatesData;
}

async function fetchWeatherRawData(сity: string) {
  const coordinates = await getCoordinates(сity);

  let weatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,precipitation,rain,showers,snowfall,weather_code,cloud_cover&timezone=Europe%2FMoscow&forecast_days=1`
  );
  weatherData = await weatherData.json();
  return weatherData;
}

window.addEventListener("newHour", () => {
  renderWeather(currentCity);
});
