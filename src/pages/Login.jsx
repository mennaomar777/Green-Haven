import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(auto, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    var(--color-grey-50) 0%,
    var(--color-grey-100) 100%
  );

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 1.5rem;
    grid-template-columns: minmax(auto, 42rem);
  }

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`;

const LoginCard = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  padding: 0 4rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-grey-200);

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`;

const StyledLogo = styled(Logo)`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const LoginHeading = styled(Heading)`
  text-align: center;
  color: var(--color-green-700);
  margin-bottom: 3.2rem;
  font-weight: 600;

  [data-theme="dark"] & {
    color: var(--color-green-400);
  }

  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
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
