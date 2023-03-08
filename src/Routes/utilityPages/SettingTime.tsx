import { color, motion } from "framer-motion";
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

const TimerForm = styled.form`
  display: flex;
  justify-content: center;

  width: 100%;
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
  const [timeGoing, setTimeGoing] = useState(false);

  const setTimer = (time: number) => {
    setTimeGoing(true);

    const timeOut = setTimeout(() => {
      console.log("수강신청 시작");
      setTimeGoing(false);
    }, time);

    if (timeGoing) {
      console.log("이미 타이머가 가고 있습니다.");
      clearTimeout(timeOut);
      return;
    }
  };

  return (
    <Container>
      <DisplayBox>
        <TimerBox>
          <TimeBtn onClick={() => setTimer(5000)}>5초 뒤 시작</TimeBtn>
        </TimerBox>

        <TimerBox>
          <TimerLabel>수강신청까지 남은 시간</TimerLabel>
          <Timer>00:00:00</Timer>
        </TimerBox>
      </DisplayBox>
    </Container>
  );
}

export default SettingTime;
