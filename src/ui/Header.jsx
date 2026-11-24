import React from "react";
import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import { Menu, X } from "lucide-react";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1rem clamp(1.6rem, 4vw, 4.8rem);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  padding: 0;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 4rem;
    height: 4rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 2vw, 2.4rem);
  min-width: 0;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <StyledHeader>
      <HamburgerButton
        type="button"
        aria-label={isSidebarOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={32} /> : <Menu size={32} />}
      </HamburgerButton>

      <HeaderActions>
        <UserAvatar />
        <HeaderMenu />
      </HeaderActions>
    </StyledHeader>
  );
}
