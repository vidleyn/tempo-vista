const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
const dateOptions = { day: "2-digit", month: "long", weekday: "long" };

let date = new Date();

function updateTime() {
  const displayTime = document.querySelector(".time");
  const displayDate = document.querySelector(".date");

  let firstHourCheck = date.getHours();
  date = new Date();
  let secondHourCheck = date.getHours();
  let isNewHour = firstHourCheck !== secondHourCheck;

  if (isNewHour) {
    changeBackground(date.getHours());
    updateDisplayWeather();
  }

  displayTime.textContent = date.toLocaleTimeString("ru-RU", timeOptions);
  displayDate.textContent = date.toLocaleDateString("ru-RU", dateOptions);
}

export { updateTime, date };
