import styled from "styled-components";
import { slideropenState } from "../atom";
import { motion, AnimatePresence } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { Link, useMatch } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #525a66;

  min-width: 193px;
  max-width: 193px;
  height: 100vh;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Title = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 12px;
  gap: 10px;
  width: 100%;
  font-size: 18px;
  background-color: #f2ae24;
  color: #ffffff;
  height: 55px;
  svg {
    width: 13px;
  }
`;

const DropDownMenu = styled(motion.div)`
  cursor: pointer;
  display: flex;
  padding-left: 15px;
  align-items: center;
  width: 100%;
  height: 40px;

  color: #ffffff;
  font-size: 13.5px;
`;

const DropDownTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 0 3px;
  font-size: 11.5px;
  transition: ease 0.5s;
  :hover {
    color: #fff;
  }
`;

const DropDownBox = styled(motion.div)`
  width: 100%;
  transform-origin: top center;
  padding: 10px 0px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const DropDownRow = styled(motion.div)`
  margin-left: 18px;
  padding-left: 10px;
  width: 100%;
  border: 1px solid transparent;
  border-left: 1px solid #f2ae24;
  font-size: 9px;
`;

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 10px;
  padding-left: 20px;
  list-style-type: circle;
  &::before {
    content: "";
    display: block;
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 1.5px;
    margin-right: 5px;
  }
  transition: ease 0.5s;
  :hover {
    color: #fff;
  }
`;

function SlideHeader() {
  const [drop, setDrop] = useState(true);
  const setOpen = useSetRecoilState(slideropenState);
  const priceMatch = useMatch(`/`);
  return (
    <Container>
      <Title onClick={() => setOpen((prev) => !prev)}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
        </svg>
        수강신청연습~~
      </Title>

      <DropDownMenu
        onClick={() => setDrop((prev) => !prev)}
        animate={{
          backgroundColor: drop ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0)",
          color: drop ? "#fff" : "rgba(255, 255, 255, 0.7)",
        }}
      >
        수강관리
      </DropDownMenu>

      <DropDownBox
        animate={{
          height: drop ? 158 : 0,
          padding: drop ? "10px 0" : 0,
          transition: { duration: 0.2, type: "tween" },
        }}
      >
        <DropDownRow>
          <DropDownTitle>
            <Link to="">공지사항</Link>
          </DropDownTitle>
        </DropDownRow>
        <DropDownRow>
          <DropDownTitle>조회</DropDownTitle>
          <DropDownItem>
            <Link to="/utility/createEnroll">연습용 과목 생성하기</Link>
          </DropDownItem>
          <DropDownItem>
            <Link to="/utility/settingTime">수강신청 연습 시간 설정</Link>
          </DropDownItem>
          <DropDownItem>
            <Link to="/utility/enrollResult">수강신청 연습 결과</Link>
          </DropDownItem>
        </DropDownRow>
        <DropDownRow>
          <DropDownTitle>
            <Link to="/enroll">수강신청</Link>
          </DropDownTitle>
        </DropDownRow>
      </DropDownBox>
    </Container>
  );
}

export default SlideHeader;
