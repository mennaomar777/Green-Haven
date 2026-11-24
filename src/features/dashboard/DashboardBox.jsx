import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  min-width: 0;
`;

export default DashboardBox;
