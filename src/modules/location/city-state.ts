import type { Coordinates, GeoResponse, GeoResult } from "./types";
import { renderWeather } from "../weather";
import { DEFAUL_CITY } from "../../config/constants";

export const city = {
  name: DEFAUL_CITY,

  changeCity() {
    const input = prompt("Укажите город", "");
    if (!input) return;

    try {
      this.name = input;
      renderWeather();
    } catch (error) {
      alert("Неправильно указан город");
      this.changeCity();
    }
  },

  async getCoordinates(): Promise<Coordinates> {
    const coordinatesLink = `https://geocoding-api.open-meteo.com/v1/search?name=${this.name}&count=1&language=ru&format=json`;

    const response = await fetch(coordinatesLink);
    const fetchedData = (await response.json()) as GeoResponse;
    const coordinatesData = fetchedData.results?.[0] as GeoResult;

    const { latitude: dataLatitude, longitude: dataLongitude, name: dataCity } = coordinatesData;

    const coordinates: Coordinates = {
      city: dataCity,
      latitude: dataLatitude,
      longitude: dataLongitude,
    };

    return coordinates;
  },

  async getWeaterApiLink() {
    const { latitude, longitude } = await city.getCoordinates();
    const apiOprions =
      "current=temperature_2m,precipitation,rain,showers,snowfall,weather_code,cloud_cover&timezone=Europe%2FMoscow&forecast_days=1";

    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&${apiOprions}`;
  },
};
