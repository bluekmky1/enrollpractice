import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import SlideHeader from "./Components/SlideHeader";
import EnrollPage from "./Routes/EnrollPage";
import LandingPage from "./Routes/LandingPage";
import UtilityPage from "./Routes/Utility";
import CreateEnroll from "./Routes/utilityPages/CreateEnroll";
import EnrollResult from "./Routes/utilityPages/EnrollResult";
import SettingTime from "./Routes/utilityPages/SettingTime";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FrameContent = styled.div`
  padding: 0px 23px;
`;

function Router() {
  return (
    <BrowserRouter>
      <Container>
        <SlideHeader />
        <RouteContainer>
          <Header />
          <FrameContent>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/utility" element={<UtilityPage />}>
                <Route path="createEnroll" element={<CreateEnroll />}></Route>
                <Route path="enrollResult" element={<EnrollResult />}></Route>
                <Route path="settingtime" element={<SettingTime />}></Route>
              </Route>
              <Route path="/enroll" element={<EnrollPage />}></Route>
            </Routes>
          </FrameContent>
        </RouteContainer>
      </Container>
    </BrowserRouter>
  );
}

export default Router;
