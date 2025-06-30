const iconCodes = {
  clearWeather: [0, 1, 2, 3],
  cloudyWeather: [45, 48, 51, 53, 55, 56, 57],
  rainyWeather: [61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99],
  snowyWeather: [71, 73, 75, 77, 85, 86],
};

export function getWeatherIcon(wmoCode) {
  let icon = "";

  if (iconCodes.clearWeather.includes(wmoCode)) {
    icon = "sun-icon";
  } else if (iconCodes.cloudyWeather.includes(wmoCode)) {
    icon = "cloud-icon";
  } else if (iconCodes.rainyWeather.includes(wmoCode)) {
    icon = "rain-icon";
  } else if (iconCodes.snowyWeather.includes(wmoCode)) {
    icon = "snow-icon";
  }

  return icon;
}
