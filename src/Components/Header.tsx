import { useRecoilState } from "recoil";
import styled from "styled-components";
import { slideropenState } from "../atom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #2142a6;
  box-shadow: 3px 0 6px rgb(0 0 0 / 15%);
  margin-bottom: 12px;
  position: relative;
`;

const MenuBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  fill: #494a4d;
  cursor: pointer;
  svg {
    width: 25px;
  }
`;

const menuBtnVars = {
  hover: {
    fill: "#f2ae24",
  },
};

const LogoBox = styled.div`
  box-sizing: border-box;
  width: 150px;
  padding: 0 20px;
  margin-right: 50px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const TimeInfoBundle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
`;

const TimeOutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 10px;
  font-weight: 600;
`;

const Time = styled.span`
  color: #f23d18;
`;

const TimeOutBtn = styled.button`
  margin: 0 10px;
  padding: 0 7.5px;
  height: 24px;
  border-radius: 3px;

  background-color: #494a4d;
  color: #fff;
  font-size: 10px;
  outline: none;
  border: none;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileIcon = styled.div`
  width: 25px;
  height: 25px;

  border-radius: 12.5px;
  margin: 0 3px;
`;
const IdBox = styled.div`
  font-size: 11px;
  font-weight: 600;
  margin-right: 13px;
`;
const DetailInfo = styled.div``;

const LogoutBtn = styled.button`
  margin: 0 10px;
  padding: 0 7.5px;
  height: 24px;
  border-radius: 3px;

  background-color: #2142a6;
  color: #fff;
  font-size: 10px;
  outline: none;
  border: none;
`;

function Header() {
  const [openValue, setOpenValue] = useRecoilState(slideropenState);
  return (
    <Container
      animate={{
        width: openValue ? "calc(100% + 0px)" : "calc(100% + 193px)",
        transition: { type: "tween", duration: 0.4 },
      }}
    >
      <MenuBtn
        variants={menuBtnVars}
        whileHover="hover"
        onClick={() => setOpenValue((prev) => !prev)}
      >
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
            fillRule="nonzero"
          />
        </svg>
      </MenuBtn>
      <LogoBox>
        <Link to="">
          <Logo src="https://www.kyonggi.ac.kr/images/common/logo.png" />
        </Link>
      </LogoBox>
      <TimeInfoBundle>
        <TimeOutBox>
          <p>Time Out : </p>
          <Time>{"00:00"}</Time>
          <TimeOutBtn>연장하기</TimeOutBtn>
        </TimeOutBox>
        <InfoBox>
          <ProfileIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
            </svg>
          </ProfileIcon>
          <IdBox>201911454</IdBox>
          <DetailInfo></DetailInfo>
          <LogoutBtn>로그아웃</LogoutBtn>
        </InfoBox>
      </TimeInfoBundle>
    </Container>
  );
}

export default Header;
