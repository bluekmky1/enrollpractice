import { motion } from "framer-motion";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { enrollopenState, enrollTime, timeFlow } from "../../atom";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
`;

const DisplayBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  margin-top: 13px;
  color: #000;
  border: 1px solid #d5d9e0;
  background-color: #f7f9fc;
  border-radius: 2px;
  font-size: 12px;
`;

const TimeBtn = styled.button``;

const TimerBox = styled.div`
  text-align: center;
`;

const Timer = styled.div`
  font-size: 70px;
`;
const TimerLabel = styled.div``;

function SettingTime() {
  const setEnrollOpen = useSetRecoilState(enrollopenState);
  const [timeGoing, setTimeGoing] = useRecoilState(timeFlow);
  const [times, setTimes] = useRecoilState(enrollTime);
  const enrollTimer = (minutes: number) => {
    // 취소를 누를 때
    if (minutes === 0) {
      if (!timeGoing) {
        return;
      }
      clearInterval(timeGoing);
      setTimeGoing(null);
      setTimes(0);
    }
    // 이미 타이머가 흐르고 있을 때 타이머 재실행 방지
    if (timeGoing) {
      return;
    }
    // 밀리세컨드 계산 후 수강신청 초기화및 보여지는 시간 계산을 위한 변수(times) 설정
    let totalMilSec = minutes * 60000;
    setEnrollOpen(false);
    setTimes(totalMilSec);

    const timerId = setInterval(() => {
      /*
      console.log(times);
       콘솔에 찍으면 enrollTimes가 0으로 찍히는 문제가 있음...
       왜 이러는지 잘 모르겠음...
      */

      totalMilSec = totalMilSec - 1000;
      setTimes(totalMilSec);
      // 타이머가 끝났을 경우 실행되는 부분
      if (totalMilSec === 0) {
        clearInterval(timerId);
        setTimeGoing(null);
        setEnrollOpen(true);
        return;
      }
    }, 1000);
    // 정지할 타이머를 state에 저장
    setTimeGoing(timerId);
  };

  return (
    <Container>
      <DisplayBox>
        <TimerBox>
          <TimeBtn onClick={() => enrollTimer(0.3)}>1분 뒤 시작</TimeBtn>
          <TimeBtn onClick={() => enrollTimer(5)}>5분 뒤 시작</TimeBtn>
          <TimeBtn onClick={() => enrollTimer(0)}>취소</TimeBtn>
        </TimerBox>

        <TimerBox>
          <TimerLabel>수강신청까지 남은 시간</TimerLabel>
          <Timer>
            {Math.floor(times / 60000)} 분 {(times / 1000) % 60} 초
          </Timer>
        </TimerBox>
      </DisplayBox>
    </Container>
  );
}

export default SettingTime;
