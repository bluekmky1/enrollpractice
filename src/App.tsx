import styled from "styled-components";
import SlideHeader from "./Components/SlideHeader";
import Router from "./Router";
import { motion } from "framer-motion";
import { openState } from "../src/atom";
import { useRecoilValue } from "recoil";

const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

function App() {
  const openValue = useRecoilValue(openState);
  return (
    <Container
      animate={{
        x: openValue ? 0 : -193,
        transition: { type: "tween", duration: 0.4 },
      }}
    >
      <SlideHeader />
      <Router></Router>
    </Container>
  );
}

export default App;
