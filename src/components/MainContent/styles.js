import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #24292e;
  margin-bottom: 4px;
`;

export const Field = styled.input`
  padding: 10px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #0969da;
  }
`;
