import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUpdateUser from "./useUpdateUser";
import styled from "styled-components";

const StyledForm = styled(Form)`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: clamp(1.8rem, 4vw, 3.2rem);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.4rem;
  box-shadow: 0 1.2rem 3.6rem rgba(28, 52, 32, 0.07);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.8rem 2rem;
  }

  @media (max-width: 480px) { padding: 1.6rem 1.4rem; }
`;

const PasswordField = styled(FormRow)`
  grid-template-columns: minmax(16rem, 0.85fr) minmax(0, 1.15fr);
  gap: 2rem;
  padding: 1.6rem 0;
  label { font-weight: 600; color: var(--color-grey-700); }
  input {
    min-height: 4.6rem;
    box-shadow: none;
    &:focus { outline: none; border-color: var(--color-green-600); box-shadow: 0 0 0 3px rgba(34, 139, 75, 0.14); }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.3rem 0;
    label { margin-bottom: 0; font-size: 1.45rem; }
    input { min-height: 4.8rem; font-size: 1.6rem; }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 0.8rem;
    & > button { width: 100%; min-height: 4.6rem; }
  }
`;

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <PasswordField
        label="New password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </PasswordField>

      <PasswordField
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </PasswordField>

      <FormRow>
        <ButtonContainer>
          <Button onClick={reset} type="reset" variation="secondary">
            Cancel
          </Button>
          <Button disabled={isUpdating}>Update password</Button>
        </ButtonContainer>
      </FormRow>
    </StyledForm>
  );
}

export default UpdatePasswordForm;
