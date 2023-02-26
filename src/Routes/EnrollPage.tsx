import styled from "styled-components";
import ListBanner from "../Components/ListBanner";
import { useRecoilValue } from "recoil";
import { enrollopenState } from "../atom";

const Container = styled.div``;
const ExplainBox = styled.div`
  color: #000;
  border: 1px solid #d5d9e0;
  background-color: #f7f9fc;
  padding: 20px 20px;
  border-radius: 2px;
  font-size: 12px;
`;

function EnrollPage() {
  const enrollOpen = useRecoilValue(enrollopenState);

  return (
    <Container>
      {enrollOpen ? (
        <></>
      ) : (
        <ExplainBox>⚠️ 수강신청 기간이 아닙니다</ExplainBox>
      )}
    </Container>
  );
}

export default EnrollPage;
