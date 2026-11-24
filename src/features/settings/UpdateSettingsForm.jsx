import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";
import useSetting from "./useSetting";
import styled from "styled-components";

const SettingsFormCard = styled(Form)`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: clamp(1.8rem, 4vw, 3.2rem);
  border: 1px solid var(--color-grey-200);
  border-radius: 1.4rem;
  box-shadow: 0 1.2rem 3.6rem rgba(28, 52, 32, 0.07);

  @media (max-width: 768px) { padding: 1.8rem 2rem; }
  @media (max-width: 480px) { padding: 1.6rem 1.4rem; }
`;

const SettingsField = styled(FormRow)`
  grid-template-columns: minmax(18rem, 0.9fr) minmax(0, 1.1fr);
  gap: 2.4rem;
  padding: 1.8rem 0;

  &:first-child { padding-top: 0; }
  &:not(:last-child) { border-bottom-color: var(--color-grey-100); }
  label { font-weight: 600; color: var(--color-grey-700); }

  input {
    min-height: 4.6rem;
    box-shadow: none;
    transition: border-color 160ms ease, box-shadow 160ms ease;
    &:focus {
      outline: none;
      border-color: var(--color-green-600);
      box-shadow: 0 0 0 3px rgba(34, 139, 75, 0.14);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.4rem 0;
    label { margin-bottom: 0; font-size: 1.45rem; }
    input { min-height: 4.8rem; font-size: 1.6rem; }
  }
`;

const SaveHint = styled.p`
  margin: 1.6rem 0 0;
  padding-top: 1.4rem;
  border-top: 1px solid var(--color-grey-100);
  color: var(--color-grey-500);
  font-size: 1.25rem;
  @media (max-width: 480px) { line-height: 1.45; }
`;

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting();

  const { updateSettingsMutate, isEditting } = useEditSettings();

  function handleUpdate(e, field) {
    if (!e.target.value) return;
    updateSettingsMutate({ [field]: e.target.value });
  }

  if (isLoading) return <Spinner />;
  return (
    <SettingsFormCard>
      <SettingsField label="Minimum nights per booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isEditting}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </SettingsField>
      <SettingsField label="Maximum nights per booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isEditting}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </SettingsField>
      <SettingsField label="Maximum guests per booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isEditting}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </SettingsField>
      <SettingsField label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isEditting}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </SettingsField>
      <SaveHint>Changes are saved automatically when you leave a field.</SaveHint>
    </SettingsFormCard>
  );
}

export default UpdateSettingsForm;
