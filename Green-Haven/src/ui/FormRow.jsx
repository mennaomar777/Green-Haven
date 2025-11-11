import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20rem 1fr 0.2fr;
  gap: 6rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 20rem 1fr 1.2fr;
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 1.6rem 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1.4rem 0;
  }
`;

const Label = styled.label`
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
