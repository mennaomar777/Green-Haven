import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100svh;
  display: grid;
  grid-template-columns: minmax(0, 44rem);
  align-content: center;
  justify-content: center;
  padding: clamp(1.6rem, 5vw, 4rem);
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: radial-gradient(ellipse at 15% 15%, rgba(94, 146, 104, 0.18), transparent 38%),
    radial-gradient(ellipse at 90% 85%, rgba(161, 190, 130, 0.2), transparent 34%),
    var(--color-grey-50);

  &::before, &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border: 1px solid rgba(67, 112, 76, 0.12);
    border-radius: 50%;
    pointer-events: none;
  }
  &::before { width: 42rem; height: 42rem; top: -25rem; right: -12rem; }
  &::after { width: 34rem; height: 34rem; bottom: -23rem; left: -12rem; }

  [data-theme="dark"] & {
    background: radial-gradient(ellipse at 15% 15%, rgba(69, 119, 79, 0.2), transparent 38%),
      radial-gradient(ellipse at 90% 85%, rgba(97, 126, 72, 0.16), transparent 34%),
      var(--color-grey-100);
  }
`;

const LoginCard = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 2rem;
  padding: clamp(2.4rem, 6vw, 4.8rem);
  box-shadow: 0 2.4rem 7rem rgba(28, 52, 32, 0.13), 0 0.3rem 1rem rgba(28, 52, 32, 0.05);
  border: 1px solid var(--color-grey-200);
`;

const StyledLogo = styled(Logo)`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const LoginHeading = styled(Heading)`
  text-align: center;
  color: var(--color-green-700);
  margin-bottom: clamp(2.4rem, 5vw, 3.2rem);
  font-weight: 650;

  [data-theme="dark"] & {
    color: var(--color-green-400);
  }

  font-size: clamp(2.2rem, 4vw, 2.8rem);
`;

function Login() {
  return (
    <LoginLayout>
      <LoginCard>
        <StyledLogo />
        <LoginHeading as="h4">Log in to your account</LoginHeading>
        <LoginForm />
      </LoginCard>
    </LoginLayout>
  );
}

export default Login;
