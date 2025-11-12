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

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
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
