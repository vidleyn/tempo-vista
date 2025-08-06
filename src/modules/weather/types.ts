export interface WeatherData {
  city: string;
  temperature: number;
  wmoCode: number;
}

export interface RawWeatherData {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}
