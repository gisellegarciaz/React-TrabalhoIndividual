import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161b22;
  padding: 12px 24px;
  border-bottom: 1px solid #30363d;
`;

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #f0f6fc;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #c9d1d9;
`;

export const LogoutButton = styled.button`
  background: #238636;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: #2ea043;
  }
`;
