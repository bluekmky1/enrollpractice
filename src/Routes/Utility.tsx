import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { slideropenState } from "../atom";

const Container = styled(motion.div)`
  width: 100%;
`;

function UtilityPage() {
  const slideOpen = useRecoilValue(slideropenState);
  return (
    <Container
      animate={{
        width: slideOpen ? "calc(100% + 0px)" : "calc(100% + 193px)",
        transition: { type: "tween", duration: 0.4 },
      }}
    >
      <Outlet />
    </Container>
  );
}

export default UtilityPage;
