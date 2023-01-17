import styled from "styled-components";
import Frame from "./components/Frame";

const StyledApp = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > section {
    width: 400px;
  }
`

const Data = {
  inputForm: [
    {
      name: "name", label: "이름", 
      auth: {
        state: null,
        check: "regex",
        fail: "이름은 2자 이상이어야 합니다"
      }
    },
    {
      name: "email", label: "이메일", placeholder: "ex@email.com",
      auth: {
        state: null,
        check: "regex",
        fail: "이메일 형식이 아닙니다: ex@email.com"
      }
    },
    {
      name: "phone", label: "전화번호", placeholder: "0000-0000",
      auth: {
        state: null,
        check: "regex",
        fail: "전화번호 형식이 아닙니다"
      }
    },
  ]
}

function App() {
  return (
    <StyledApp>
      <section><Frame.InputForm data={Data.inputForm}/></section>
    </StyledApp>
  );
}

export default App;
