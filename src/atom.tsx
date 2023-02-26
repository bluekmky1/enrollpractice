import { atom } from "recoil";

export const slideropenState = atom({
  key: "slideropen",
  default: true,
});

export const enrollopenState = atom({
  key: "enrollopen",
  default: false,
});
