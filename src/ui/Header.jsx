import React from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import { Menu, X } from "lucide-react";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
  position: relative;
  z-index: 1000;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 2.8rem;
  cursor: pointer;
  color: var(--color-brand-600);
  padding: 0.4rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <StyledHeader>
      <HamburgerButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? <X size={32} /> : <Menu size={32} />}
      </HamburgerButton>

      <div style={{ display: "flex", alignItems: "center", gap: "2.4rem" }}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </StyledHeader>
  );
}
