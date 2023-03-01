import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 13px;
  color: #000;
  border: 1px solid #d5d9e0;
  background-color: #f7f9fc;
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 15px;
  a {
    color: #4311d7;
  }
`;

function LandingPage() {
  return (
    <Container>
      <ExplainBox>
        이 페이지는 수강신청을 연습하기 위해 만들어진 페이지입니다 !!
        <br />
        수강신청을 위해서는 이 페이지로 가시길 바랍니다!!!
        <a href="http://sugang.kyonggi.ac.kr/">http://sugang.kyonggi.ac.kr/</a>
      </ExplainBox>
    </Container>
  );
}

export default LandingPage;
