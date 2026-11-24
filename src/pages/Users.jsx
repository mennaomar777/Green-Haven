import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import styled from "styled-components";

const NewUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: min(100%, 82rem);
  margin: 0 auto;
  padding: 0.8rem 1.6rem 3.2rem;

  @media (max-width: 768px) {
    gap: 1.8rem;
    padding: 0 1rem 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.4rem;
    padding-inline: 0;
  }
`;

const MainHeading = styled(Heading)`
  text-align: left;
  color: var(--color-green-700);
  width: 100%;

  [data-theme="dark"] & {
    color: var(--color-green-400);
  }
`;

const Intro = styled.p`
  margin-top: -1.6rem;
  color: var(--color-grey-600);
  font-size: 1.5rem;

  [data-theme="dark"] & { color: var(--color-grey-300); }

  @media (max-width: 768px) {
    margin-top: -1rem;
  }
`;

function NewUsers() {
  return (
    <NewUsersContainer>
      <MainHeading as="h1">Create a new user</MainHeading>
      <Intro>Add an account for a team member to access Green Haven.</Intro>
      <SignupForm />
    </NewUsersContainer>
  );
}

export default NewUsers;
