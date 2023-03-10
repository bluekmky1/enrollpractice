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
  // false가 기본 디폴트 값이어야함(중요!!!!)
  default: false,
});

export const enrollTime = atom({
  key: "enrollTime",
  default: 0,
});

export const timeFlow = atom<NodeJS.Timeout | null>({
  key: "timeflow",
  default: null,
});
