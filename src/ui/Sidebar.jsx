import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  width: 28rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-200);
  padding: 0 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  z-index: 999;
  box-shadow: 0 1.6rem 4rem rgba(20, 35, 24, 0.14);
  overflow-y: auto;
  overscroll-behavior: contain;

  .dark-mode & {
    background-color: #151c17;
    border-right-color: rgba(168, 193, 170, 0.16);
    box-shadow: 1.6rem 0 4rem rgba(0, 0, 0, 0.42);
  }

  @media (max-width: 480px) {
    width: min(30rem, 86vw);
    padding-inline: 1.4rem;
  }

  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <StyledSidebar isSidebarOpen={isSidebarOpen}>
      <Logo />
      <MainNav onNavClick={() => setIsSidebarOpen(false)} />
    </StyledSidebar>
  );
}
