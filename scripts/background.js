function changeBackground(currentHour) {
  console.log("CHANGING BG!!!");

  const allBackgrounds = document.querySelectorAll("[data-time]");
  allBackgrounds.forEach((item) => item.classList.remove("background__item--showing"));

  const timeRanges = {
    night: [22, 23, 0, 1, 2, 3],
    morning: [4, 5, 6, 7, 8, 9],
    day: [10, 11, 12, 13, 14, 15],
    evening: [16, 17, 18, 19, 20, 21],
  };

  let timeOfDay;

  if (timeRanges.night.includes(currentHour)) {
    timeOfDay = "night";
  } else if (timeRanges.morning.includes(currentHour)) {
    timeOfDay = "morning";
  } else if (timeRanges.day.includes(currentHour)) {
    timeOfDay = "day";
  } else if (timeRanges.evening.includes(currentHour)) {
    timeOfDay = "evening";
  }

  const activeBackground = document.querySelector(`[data-time=${timeOfDay}]`);
  if (activeBackground) {
    activeBackground.classList.add("background__item--showing");
  }
}

export { changeBackground };
