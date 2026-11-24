import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background-color: var(--color-grey-50);
`;

const Main = styled.main`
  flex: 1;
  background-color: var(--color-grey-50);
  padding: 4rem clamp(1.6rem, 4vw, 4.8rem) 6.4rem;
  overflow-y: auto;
  transition: filter 0.3s ease;
  filter: ${(props) => (props.$isSidebarOpen ? "blur(6px)" : "none")};
  pointer-events: ${(props) => (props.$isSidebarOpen ? "none" : "auto")};

  @media (max-width: 640px) {
    padding: 2rem 1.2rem 3.2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 640px) {
    gap: 2rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 998;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.4s ease;
`;

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Main $isSidebarOpen={isSidebarOpen}>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Overlay
        $isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
      />
    </StyledAppLayout>
  );
}
