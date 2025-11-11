import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 28rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-200);
  padding: 0rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  z-index: 999;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.15);

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
