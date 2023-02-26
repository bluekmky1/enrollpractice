import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`;

function UtilityPage() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default UtilityPage;
