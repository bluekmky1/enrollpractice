import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import EnrollPage from "./Routes/EnrollPage";
import LandingPage from "./Routes/LandingPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const RouteContainer = styled.div`
  padding: 0px 20px;
`;

function Router() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <RouteContainer>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/enroll" element={<EnrollPage />}></Route>
          </Routes>
        </RouteContainer>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
