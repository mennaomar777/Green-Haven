import { useState } from "react";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import useUser from "./useUser";
import useUpdateUser from "./useUpdateUser";
import styled from "styled-components";
import Input from "../../ui/Input";

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

const AccountField = styled(FormRow)`
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

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <AccountField label="Email address">
        <Input value={email} disabled={isUpdating} />
      </AccountField>

      <AccountField label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </AccountField>

      <AccountField label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </AccountField>

      <FormRow>
        <ButtonContainer>
          <Button
            type="reset"
            variation="secondary"
            disabled={isUpdating}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button variation="primary" disabled={isUpdating}>
            Update account
          </Button>
        </ButtonContainer>
      </FormRow>
    </StyledForm>
  );
}

export default UpdateUserDataForm;
