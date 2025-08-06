import type { TimeOfDay } from "./types";
import { timeRanges } from "./time-ranges";
import { date } from "../date-time";
import { getRandomInt } from "../../utils";
import { SELECTORS } from "../../config/selectors";

export const background = {
  change(currentHour: number) {
    const timeOfDay: string = this.define(currentHour);
    this.remove();
    this.set(timeOfDay);
  },

  set(timeOfDay: string) {
    const backgroundElement = document.querySelector(SELECTORS.timeOfDayBackground(timeOfDay));
    if (backgroundElement) {
      backgroundElement.classList.add(SELECTORS.activeBackground);
    }
  },

  setRandom() {
    const currentBackgroundElement = document.querySelector<HTMLElement>(
      `.${SELECTORS.currentBackground}`
    );

    const currentBackgroundTime: string = currentBackgroundElement?.dataset.time ?? "day";

    let int = getRandomInt(0, 23);
    let isDifferentTime = currentBackgroundTime !== this.define(int);

    while (!isDifferentTime) {
      int = getRandomInt(0, 23);
      isDifferentTime = currentBackgroundTime !== this.define(int);
    }

    if (isDifferentTime) {
      this.change(int);
    }
  },

  remove() {
    const backgrounds = document.querySelectorAll(SELECTORS.allBackgrounds);
    backgrounds.forEach((item) => item.classList.remove(SELECTORS.activeBackground));
  },

  define(currentHour: number): TimeOfDay {
    let timeOfDay: TimeOfDay = "day";

    if (timeRanges.night.includes(currentHour)) {
      timeOfDay = "night";
    } else if (timeRanges.morning.includes(currentHour)) {
      timeOfDay = "morning";
    } else if (timeRanges.day.includes(currentHour)) {
      timeOfDay = "day";
    } else if (timeRanges.evening.includes(currentHour)) {
      timeOfDay = "evening";
    }

    return timeOfDay;
  },
};

window.addEventListener("newHour", () => {
  const currentHours = date.getHours();
  background.change(currentHours);
});
