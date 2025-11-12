import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";

const SettingsContainer = styled.div`
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

function Settings() {
  return (
    <SettingsContainer>
      <MainHeading as="h1">Update hotel settings</MainHeading>
      <UpdateSettingsForm />
    </SettingsContainer>
  );
}

export default Settings;
