import styled from "@emotion/styled";
import theme from "../theme";

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;

  & label {
    display: flex;
    flex-direction: column;

    & > span {
      color: white;
      font-weight: 500;
      margin-bottom: 12px;
    }
    & input {
      padding: 20px;
      border: none;
      color: white;
      border-bottom: 1px solid ${theme.Colors.gray3};
      background-color: transparent;
      margin-bottom: 20px;
    }
    & > p {
      color: ${theme.Colors.warning1};
      margin: -10px 0 20px 20px;
    }
  }

  & > sub {
    display: grid;
    grid-template-columns: 1fr 125px;
    gap: 20px;

    & > button {
      height: 60px;
      border-radius: 30px;
      background-color: ${theme.Colors.black1};
      color: white;
      margin-top: 30px;
    }

    &.auth-code {
      display: flex;
      & > label {
        & > div:nth-of-type(1){
          display: flex;
          flex-direction: row;
          gap: 15px;
          & > input {
            text-align: center;
            width: 55px;
          }
        }
      }
    }
  }

  & > div {
    width: 210px;
    margin: 50px auto 0;
  }
`