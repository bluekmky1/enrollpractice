import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Categories, EnrollPracticeList, enrollList } from "../../atom";

const Container = styled.div`
  width: 100%;
`;
const DisplayBox = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 13px;
  color: #000;
  border: 1px solid #d5d9e0;
  background-color: #f7f9fc;
  border-radius: 2px;
  font-size: 12px;
`;

const CreateForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 150px;
`;

const FormItemLabel = styled.div`
  font-size: 9px;
  font-weight: 600;
  text-align: center;
  min-width: 50px;
`;

const CreateBtn = styled(motion.button)`
  padding: 0 7.5px;
  min-width: 160px;
  padding: 10px 10px;
  border-radius: 3px;

  background-color: #494a4d;
  color: #fff;
  font-size: 11px;
  outline: none;
  border: none;
`;

const EnrollTypeSelect = styled.select`
  margin: 0px 10px;
  min-width: 100px;
  font-size: 11px;
`;
const EnrollTypeOption = styled.option``;

const TableBox = styled.div`
  padding: 10px 10px;
  max-width: 550px;
  width: 550px;
`;

const ErrorDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;

const EnrollDisplay = styled.table`
  width: 100%;
  text-align: center;
  thead {
    border-bottom: 1px solid black;
  }
  td {
    padding: 5px;
  }
`;

interface ICreateEnroll {
  category: string;
}

function CreateEnroll() {
  const [Enrolls, setEnrolls] = useRecoilState(enrollList);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ICreateEnroll>();

  const onValid = (data: ICreateEnroll) => {
    if (data.category !== Categories.somang) {
      setError("category", {
        message: "아직 과목번호 형태는 이용 불가 합니다.",
      });
    }
    if (Enrolls.length > 6) {
      setError("root.enrollAmount", {
        type: "enrollAmountLimit",
        message: "수강신청 개수는 7개를 넘을 수 없습니다!",
      });
    } else {
      setEnrolls((prev) => [
        ...prev,
        {
          id: prev.length === 0 ? 0 : prev.length,
          title: `수강신청 성공하자 ${prev.length + 1} !!!`,
          subjectCode: Math.floor(Math.random() * 10000),
          enrollCategory: "string",
        },
      ]);
    }
    console.log();
  };

  return (
    <Container>
      <DisplayBox>
        <CreateForm onSubmit={handleSubmit(onValid)}>
          <FormItemLabel>수강신청 종류 선택</FormItemLabel>
          <EnrollTypeSelect
            defaultValue={Categories.somang}
            {...register("category")}
          >
            <EnrollTypeOption value={Categories.somang}>
              소망가방
            </EnrollTypeOption>
            <EnrollTypeOption value={Categories.subjectNum}>
              추후 과목번호 형태 추가 예정...
            </EnrollTypeOption>
          </EnrollTypeSelect>
          <ErrorDisplay>
            <div>{errors.category?.message}</div>
            <div>{}</div>
          </ErrorDisplay>
          <CreateBtn
            animate={{
              backgroundColor: errors.root?.enrollAmount
                ? "#FB3640"
                : "#494a4d",
            }}
          >
            {errors.root?.enrollAmount
              ? errors.root?.enrollAmount.message
              : "생성"}
          </CreateBtn>
        </CreateForm>
      </DisplayBox>
      <DisplayBox>
        <TableBox>
          <EnrollDisplay>
            <thead>
              <tr>
                <td>no.</td>
                <td>과목코드</td>
                <td>과목명</td>
                <td>수강신청 종류</td>
              </tr>
            </thead>
            <tbody>
              {Enrolls.map((enroll) => (
                <tr key={enroll.id}>
                  <td>{enroll.id}</td>
                  <td>{enroll.subjectCode}</td>
                  <td>{enroll.title}</td>
                  <td>
                    {enroll.enrollCategory === Categories.somang
                      ? "소망가방"
                      : "과목코드"}
                  </td>
                </tr>
              ))}
            </tbody>
          </EnrollDisplay>
        </TableBox>
      </DisplayBox>
    </Container>
  );
}

export default CreateEnroll;
