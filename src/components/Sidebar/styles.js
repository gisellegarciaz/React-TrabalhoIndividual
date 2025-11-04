import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 240px;
  background-color: #161b22;
  padding: 24px 16px;
  border-right: 1px solid #30363d;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuItem = styled.div`
  color: #c9d1d9;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #21262d;
  }
`;
