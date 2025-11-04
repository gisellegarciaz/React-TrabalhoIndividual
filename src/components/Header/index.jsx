import React from "react";
import { HeaderContainer, Logo, UserInfo, LogoutButton } from "./styles";

export default function Header({ user, onLogout }) {
  return (
    <HeaderContainer>
      <Logo>GitHub</Logo>
      <UserInfo>
        <span>{user}</span>
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </UserInfo>
    </HeaderContainer>
  );
}
