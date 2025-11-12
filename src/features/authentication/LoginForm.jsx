import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import useLogin from "./useLogin";
import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const LoginFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-weight: 500;
    font-size: 1.5rem;
  }

  input {
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-sm);

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    input {
      padding: 1rem;
      font-size: 1.6rem;
    }
  }
`;

const LoginButton = styled(Button)`
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 5rem;
  margin-inline: auto;
`;

function LoginForm() {
  const [email, setEmail] = useState("menna@gmail.com");
  const [password, setPassword] = useState("pass1234");
  const { loginMutate, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    loginMutate(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <LoginFormRow>
        <label htmlFor="email">Email address</label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          placeholder="Enter your email address"
        />
      </LoginFormRow>

      <LoginFormRow>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          placeholder="Enter your password"
        />
      </LoginFormRow>

      <LoginButton size="large" disabled={isLoading}>
        {!isLoading ? "Log in to your account" : <SpinnerMini />}
      </LoginButton>
    </StyledForm>
  );
}

export default LoginForm;
