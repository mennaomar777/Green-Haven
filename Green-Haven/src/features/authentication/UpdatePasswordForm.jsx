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

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
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
      <FormRow
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
      </FormRow>

      <FormRow
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
      </FormRow>

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
