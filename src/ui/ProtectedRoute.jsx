import React, { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FullPage = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  padding: 2.4rem;
  background:
    radial-gradient(ellipse at 12% 12%, rgba(94, 146, 104, 0.14), transparent 38%),
    radial-gradient(ellipse at 90% 88%, rgba(161, 190, 130, 0.16), transparent 34%),
    var(--color-grey-50);
  display: grid;
  place-items: center;
`;

const LoadingCard = styled.div`
  width: min(100%, 36rem);
  padding: 2.8rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.6rem;
  box-shadow: 0 1.6rem 4.8rem rgba(28, 52, 32, 0.1);
  animation: ${appear} 280ms ease-out both;

  @media (max-width: 480px) {
    padding: 2.4rem 1.8rem;
  }
`;

const Brand = styled.div`
  height: 8rem;
  overflow: hidden;
  display: flex;
  align-items: center;

  & > div { margin: 0; }
  img { height: 14rem; }
`;

const LoadingTrack = styled.div`
  width: 4.4rem;
  height: 0.4rem;
  overflow: hidden;
  border-radius: 99px;
  background: var(--color-grey-100);

  &::after {
    content: "";
    display: block;
    width: 45%;
    height: 100%;
    border-radius: inherit;
    background: var(--color-brand-600);
    animation: loading 1.1s ease-in-out infinite;
  }

  @keyframes loading {
    from { transform: translateX(-110%); }
    to { transform: translateX(240%); }
  }
`;

const LoadingText = styled.p`
  margin: 0;
  color: var(--color-grey-600);
  font-size: 1.4rem;
  font-weight: 500;

  [data-theme="dark"] & { color: var(--color-grey-300); }
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <LoadingCard role="status" aria-live="polite">
          <Brand><Logo /></Brand>
          <LoadingTrack aria-hidden="true" />
          <LoadingText>Preparing your workspace…</LoadingText>
        </LoadingCard>
      </FullPage>
    );

  if (isAuthenticated) return children;
}
