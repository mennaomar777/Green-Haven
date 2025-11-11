import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.35rem 0.7rem;
  }
`;

export default function FilterBookings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("status") || "all";

  function handleClick(value) {
    searchParams.set("status", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      <FilterButton
        onClick={() => handleClick("all")}
        active={activeFilter === "all"}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={() => handleClick("checked-out")}
        active={activeFilter === "checked-out"}
      >
        Checked out
      </FilterButton>
      <FilterButton
        onClick={() => handleClick("checked-in")}
        active={activeFilter === "checked-in"}
      >
        Checked in
      </FilterButton>
      <FilterButton
        onClick={() => handleClick("unconfirmed")}
        active={activeFilter === "unconfirmed"}
      >
        Unconfirmed
      </FilterButton>
    </StyledFilter>
  );
}
