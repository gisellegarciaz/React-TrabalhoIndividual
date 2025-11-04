import React from "react";
import { SidebarContainer, MenuItem } from "./styles";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <MenuItem>Overview</MenuItem>
      <MenuItem>Repositories</MenuItem>
      <MenuItem>Projects</MenuItem>
      <MenuItem>Packages</MenuItem>
      <MenuItem>Stars</MenuItem>
      <MenuItem>Settings</MenuItem>
    </SidebarContainer>
  );
}
