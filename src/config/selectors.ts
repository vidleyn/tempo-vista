export const SELECTORS = {
  currentBackground: "background__item--showing[data-time]",

  activeBackground: "background__item--showing",

  allBackgrounds: "[data-time]",

  timeOfDayBackground(timeOfDay: string) {
    return `[data-time="${timeOfDay}"]`;
  },
};
