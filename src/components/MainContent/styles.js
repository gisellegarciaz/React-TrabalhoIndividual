import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Field = styled.input`
  padding: 10px;
  border: 1px solid #2a9c43ff;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #0969da;
  }
`;
