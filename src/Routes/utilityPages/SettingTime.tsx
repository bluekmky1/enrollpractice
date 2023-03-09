import { motion } from "framer-motion";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { enrollopenState } from "../../atom";
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
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const enrollTimer = (minutes: number) => {
    setEnrollOpen(false);
    let minToMill = minutes * 60000;
    let min = Math.floor(minToMill / 60000);
    let sec = (minToMill / 1000) % 60;
    setMin(min);
    setSec(sec);
    const timerId = setInterval(() => {
      minToMill = minToMill - 1000;
      min = Math.floor(minToMill / 60000);
      sec = (minToMill / 1000) % 60;
      setMin(min);
      setSec(sec);
      console.log("수강신청 시작 " + min + "분" + sec + "초 전");
      if (minToMill === 0) {
        clearInterval(timerId);
        console.log("수강신청 열림");
        setEnrollOpen(true);
        return;
      }
    }, 1000);
  };

  return (
    <Container>
      <DisplayBox>
        <TimerBox>
          <TimeBtn onClick={() => enrollTimer(1)}>1초 뒤 시작</TimeBtn>
        </TimerBox>

        <TimerBox>
          <TimerLabel>수강신청까지 남은 시간</TimerLabel>
          <Timer>
            {min} 분 {sec} 초
          </Timer>
        </TimerBox>
      </DisplayBox>
    </Container>
  );
}

export default SettingTime;
