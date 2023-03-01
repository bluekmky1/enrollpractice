import { atom } from "recoil";

export enum Categories {
  somang = "somang",
  subjectNum = "subjectNum",
}

export interface EnrollPracticeList {
  id: number;
  title: string;
  subjectCode: number;
  enrollCategory: string;
}

export const enrollList = atom<EnrollPracticeList[]>({
  key: "enrollList",
  default: [],
});

export const slideropenState = atom({
  key: "slideropen",
  default: true,
});

export const enrollopenState = atom({
  key: "enrollopen",
  default: false,
});
