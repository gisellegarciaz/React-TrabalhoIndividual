import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 16px;
  color: #c9d1d9;
  transition: 0.2s ease;

  &:hover {
    border-color: #58a6ff;
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 16px;
  color: #f0f6fc;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #8b949e;
`;
