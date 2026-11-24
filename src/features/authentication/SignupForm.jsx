import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignUp from "./useSignUp";
import styled from "styled-components";

const SignupFormCard = styled(Form)`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: clamp(2rem, 4vw, 3.2rem);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.4rem;
  box-shadow: 0 1.2rem 3.6rem rgba(28, 52, 32, 0.08);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.4rem;
    border-radius: 1.2rem;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 0.8rem;
    & > button {
      width: 100%;
      min-height: 4.6rem;
      justify-content: center;
    }
  }
`;

const SignupField = styled(FormRow)`
  grid-template-columns: 1fr;
  gap: 0.8rem;
  padding: 1.4rem 0;

  &:first-child { padding-top: 0; }
  &:not(:last-child) { border-bottom: 0; }

  label {
    font-weight: 600;
    color: var(--color-grey-700);
  }

  input {
    min-height: 4.6rem;
    border-radius: 0.8rem;
    box-shadow: none;
    transition: border-color 160ms ease, box-shadow 160ms ease;

    &:focus {
      outline: none;
      border-color: var(--color-green-600);
      box-shadow: 0 0 0 3px rgba(34, 139, 75, 0.14);
    }
  }

  @media (max-width: 768px) {
    padding: 1.3rem 0;
    gap: 0.7rem;

    label {
      font-size: 1.45rem;
      margin: 0;
    }

    input {
      min-height: 4.8rem;
      padding-inline: 1.2rem;
      font-size: 1.6rem;
    }
  }
`;

const FormIntro = styled.p`
  margin: 0 0 1rem;
  color: var(--color-grey-600);
  font-size: 1.35rem;

  [data-theme="dark"] & { color: var(--color-grey-300); }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
  }
`;

function SignupForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  const { signUpMutate, isLoading } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    signUpMutate(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <SignupFormCard onSubmit={handleSubmit(onSubmit)}>
      <FormIntro>Enter the new team member’s details below.</FormIntro>
      <SignupField label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </SignupField>

      <SignupField label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </SignupField>

      <SignupField
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </SignupField>

      <SignupField label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </SignupField>

      <FormRow>
        <FormActions>
          <Button
            variation="secondary"
            type="reset"
            disabled={isLoading}
            onClick={reset}
          >
            Cancel
          </Button>
          <Button disabled={isLoading}>Create new user</Button>
        </FormActions>
      </FormRow>
    </SignupFormCard>
  );
}

export default SignupForm;
