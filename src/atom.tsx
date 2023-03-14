import { atom } from "recoil";

export enum Categories {
  somang = "somang",
  subjectNum = "subjectNum",
}

export interface EnrollPracticeList {
  id: number;
  title: string;
  subjectCode: string;
  enrollCategory: string;
}

// 현재 수강신청 리스트
export const enrollList = atom<EnrollPracticeList[]>({
  key: "enrollList",
  default: [],
});

// 왼쪽 슬라이더 바가 보이는지 안보이는지
export const slideropenState = atom({
  key: "slideropen",
  default: true,
});

// 수강신청이 진행중인지 아닌지
export const enrollopenState = atom({
  key: "enrollopen",
  // false가 기본 디폴트 값이어야함(중요!!!!)
  default: false,
});

export const enrollReady = atom({
  key: "enrollReady",
  default: false,
});

export const enrollTime = atom({
  key: "enrollTime",
  default: 0,
});

// 수강신청 타이머가 흐르고 있는지 아닌지
export const timeFlow = atom<NodeJS.Timeout | null>({
  key: "timeflow",
  default: null,
});
