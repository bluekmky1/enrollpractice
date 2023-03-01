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
  const List = [
    "교양",
    "전공",
    "교직",
    "연계(융합)",
    "ROTC",
    "일반대학원",
    "기타대학원",
    "외국어과목",
  ];

  return (
    <Container>
      {enrollOpen ? (
        <>
          <ListBanner menuList={List} />
        </>
      ) : (
        <ExplainBox>⚠️ 수강신청 기간이 아닙니다</ExplainBox>
      )}
    </Container>
  );
}

export default EnrollPage;
