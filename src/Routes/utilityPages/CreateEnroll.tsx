import { useForm } from "react-hook-form";
import styled from "styled-components";
import ListBanner from "../../Components/ListBanner";

const Container = styled.div`
  width: 100%;
`;
const CreateFormBox = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 13px;
  color: #000;
  border: 1px solid #d5d9e0;
  background-color: #f7f9fc;
  padding: 10px 20px;
  border-radius: 2px;
  font-size: 12px;
`;

const CreateForm = styled.form`
  display: flex;

  align-items: center;
`;

const InputLabel = styled.div`
  padding: 0 10px;
  font-size: 9px;
  font-weight: 600;
`;

const CreateBtn = styled.button`
  margin-left: 20px;
  padding: 0 7.5px;
  width: 60px;
  height: 24px;
  border-radius: 3px;

  background-color: #494a4d;
  color: #fff;
  font-size: 11px;
  outline: none;
  border: none;
`;

function CreateEnroll() {
  const { register, handleSubmit } = useForm();

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
      <ListBanner menuList={List} />
      <CreateFormBox>
        <CreateForm>
          <InputLabel>캠퍼스</InputLabel>
          <input />
          <InputLabel>영역</InputLabel>
          <input />
          <InputLabel>과목</InputLabel>
          <input />
        </CreateForm>
        <CreateBtn>생성</CreateBtn>
      </CreateFormBox>
    </Container>
  );
}

export default CreateEnroll;
