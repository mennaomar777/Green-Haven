import styled, { keyframes, css } from "styled-components";
import Logo from "./Logo";

const rotate = keyframes`
  to { transform: rotate(1turn); }
`;

const FullPage = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  padding: 2.4rem;
  display: grid;
  place-items: center;
  background:
    radial-gradient(ellipse at 12% 12%, rgba(94, 146, 104, 0.14), transparent 38%),
    radial-gradient(ellipse at 90% 88%, rgba(161, 190, 130, 0.16), transparent 34%),
    var(--color-grey-50);
`;

const Card = styled.div`
  width: min(100%, 36rem);
  padding: 2.8rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.6rem;
  box-shadow: 0 1.6rem 4.8rem rgba(28, 52, 32, 0.1);

  @media (max-width: 480px) { padding: 2.4rem 1.8rem; }
`;

const Brand = styled.div`
  height: 8rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  & > div { margin: 0; }
  img { height: 14rem; }
`;

const Section = styled.div`
  min-height: ${(props) => props.$minHeight || "16rem"};
  width: 100%;
  display: grid;
  place-items: center;
  padding: 1.6rem;
`;

const Inline = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-grey-600);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;

  .dark-mode & { color: var(--color-grey-300); }

  ${(props) => props.$small && css`
    gap: 0;
    line-height: 1;
  `}
`;

const Ring = styled.span`
  display: inline-block;
  flex: 0 0 auto;
  width: ${(props) => props.$small ? "1.8rem" : "3.2rem"};
  height: ${(props) => props.$small ? "1.8rem" : "3.2rem"};
  border: ${(props) => props.$small ? "2px" : "3px"} solid var(--color-grey-200);
  border-top-color: var(--color-brand-600);
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`;

export default function Loading({
  fullPage = false,
  small = false,
  label = "Loading…",
  minHeight,
}) {
  if (fullPage) {
    return (
      <FullPage>
        <Card role="status" aria-live="polite">
          <Brand><Logo /></Brand>
          <Ring aria-hidden="true" />
          <Inline>{label}</Inline>
        </Card>
      </FullPage>
    );
  }

  const content = (
    <Inline role="status" aria-live="polite" $small={small}>
      <Ring aria-hidden="true" $small={small} />
      {!small && label}
    </Inline>
  );

  return small ? content : <Section $minHeight={minHeight}>{content}</Section>;
}
