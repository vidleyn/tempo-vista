import type { WeatherData, RawWeatherData } from "./index";
import { city } from "../location";

export async function fetchWeatherData(): Promise<RawWeatherData> {
  const weatherDataLink = await city.getWeaterApiLink();
  const response = await fetch(weatherDataLink);
  const weatherData = (await response.json()) as RawWeatherData;

  return weatherData;
}

export async function processWeatherData(): Promise<WeatherData> {
  const coordinates = await city.getCoordinates();
  const rawWeatherData = await fetchWeatherData();

  let currentTemperature = Math.round(rawWeatherData.current.temperature_2m);

  const weatherData: WeatherData = {
    city: coordinates.city,
    temperature: currentTemperature,
    wmoCode: rawWeatherData.current.weather_code,
  };

  return weatherData;
}
