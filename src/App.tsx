import styled from "styled-components";
import SlideHeader from "./Components/SlideHeader";
import Router from "./Router";
import { motion } from "framer-motion";
import { slideropenState } from "../src/atom";
import { useRecoilValue } from "recoil";

const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

function App() {
  const openValue = useRecoilValue(slideropenState);
  return (
    <Container
      animate={{
        x: openValue ? "0px" : "-193px",
        transition: { type: "tween", duration: 0.4 },
      }}
    >
      <Router />
    </Container>
  );
}

export default App;
