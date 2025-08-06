const iconCodes = {
  clearWeather: [0, 1, 2, 3],
  cloudyWeather: [45, 48, 51, 53, 55, 56, 57],
  rainyWeather: [61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99],
  snowyWeather: [71, 73, 75, 77, 85, 86],
};

export function getWeatherIcon(wmoCode: number) {
  if (iconCodes.clearWeather.includes(wmoCode)) {
    return "sun-icon";
  }

  if (iconCodes.cloudyWeather.includes(wmoCode)) {
    return "cloud-icon";
  }

  if (iconCodes.rainyWeather.includes(wmoCode)) {
    return "rain-icon";
  }

  if (iconCodes.snowyWeather.includes(wmoCode)) {
    return "snow-icon";
  }

  return "";
}
