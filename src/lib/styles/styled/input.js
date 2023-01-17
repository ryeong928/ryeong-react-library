import styled from "styled-components";

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > span:nth-of-type(1){
    color: black;
  }
  & > span:nth-of-type(2){
    color: black;
  }
  & > input{
    color: black;
  }
`