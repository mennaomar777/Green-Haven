import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import styled from "styled-components";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: min(100%, 82rem);
  margin: 0 auto;
  padding: 0.8rem 1.6rem 3.2rem;

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 0 1rem 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.6rem;
    padding-inline: 0;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 0.4rem;

  @media (max-width: 768px) {
    gap: 1.6rem;
  }
`;

const SectionHeading = styled(Heading)`
  text-align: left;
  width: 100%;

`;

const MainHeading = styled(Heading)`
  text-align: left;
  color: var(--color-green-700);
  width: 100%;

  [data-theme="dark"] & {
    color: var(--color-green-400);
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
