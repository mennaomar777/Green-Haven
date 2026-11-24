import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";
const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  max-width: 100%;
  box-shadow: var(--shadow-sm);

  @media (max-width: 480px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding-inline: 0.5rem;
    font-size: 1.2rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }
`;

export default function DashboardFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("last") || "7";
  function handleClick(value) {
    searchParams.set("last", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      <FilterButton
        onClick={() => handleClick("7")}
        active={activeFilter === "7"}
      >
        Last 7 days
      </FilterButton>
      <FilterButton
        onClick={() => handleClick("30")}
        active={activeFilter === "30"}
      >
        Last 30 days
      </FilterButton>
      <FilterButton
        onClick={() => handleClick("90")}
        active={activeFilter === "90"}
      >
        Last 90 days
      </FilterButton>
    </StyledFilter>
  );
}
