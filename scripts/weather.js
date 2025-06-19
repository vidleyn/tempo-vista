let inputCity = "Москва";

async function updateDisplayWeather() {
  const displayTemperature = document.querySelector(".utility__value");
  const displayCity = document.querySelector(".city");

  let { temperature, city, wmoCode } = await getWeather();
  let weatherIcon = document.querySelector(".weather .utility__value");

  displayTemperature.textContent = ``;
  displayTemperature.textContent += `${temperature}°`;

  displayCity.textContent = ``;
  displayCity.textContent += `${city}`;

  weatherIcon.classList.remove("sun-icon", "cloud-icon", "rain-icon", "snow-icon");
  weatherIcon.classList.add(getWeatherIcon(wmoCode));
}

async function getWeather() {
  console.log("CHANGING WEATHER!!!");

  let coordinates = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${inputCity}&count=1&language=ru&format=json`
  );
  coordinates = await coordinates.json();

  let latitude = coordinates.results[0].latitude;
  let longitude = coordinates.results[0].longitude;

  let weather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,rain,showers,snowfall,weather_code,cloud_cover&timezone=Europe%2FMoscow&forecast_days=1`
  );
  weather = await weather.json();
  let currentTemperature = Math.round(weather.current.temperature_2m);

  return {
    temperature: currentTemperature,
    city: coordinates.results[0].name,
    wmoCode: weather.current.weather_code,
  };
}

function getWeatherIcon(wmoCode) {
  let clearWeather = [0, 1, 2, 3];
  let cloudyWeather = [45, 48, 51, 53, 55, 56, 57];
  let rainyWeather = [61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99];
  let snowyWeather = [71, 73, 75, 77, 85, 86];

  if (clearWeather.includes(wmoCode)) {
    return "sun-icon";
  } else if (cloudyWeather.includes(wmoCode)) {
    return "cloud-icon";
  } else if (rainyWeather.includes(wmoCode)) {
    return "rain-icon";
  } else if (snowyWeather.includes(wmoCode)) {
    return "snow-icon";
  } else {
    return "";
  }
}

export { updateDisplayWeather };
