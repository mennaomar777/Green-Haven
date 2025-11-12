import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    gap: 2.4rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 0.5rem;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.6rem;
  }
`;

const SectionHeading = styled(Heading)`
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const MainHeading = styled(Heading)`
  text-align: center;
  color: var(--color-green-700);
  width: 100%;

  [data-theme="dark"] & {
    color: var(--color-green-400);
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

function Account() {
  return (
    <AccountContainer>
      <MainHeading as="h1">Update your account</MainHeading>

      <FormSection>
        <SectionHeading as="h3">Update user data</SectionHeading>
        <UpdateUserDataForm />
      </FormSection>

      <FormSection>
        <SectionHeading as="h3">Update password</SectionHeading>
        <UpdatePasswordForm />
      </FormSection>
    </AccountContainer>
  );
}

export default Account;
