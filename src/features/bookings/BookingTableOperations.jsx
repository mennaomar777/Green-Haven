import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
  margin-bottom: 1.6rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    gap: 0.8rem;
  }
`;

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  max-width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

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

  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
    padding: 0.65rem 0.35rem;
    white-space: normal;
    line-height: 1.25;
    min-height: 3.8rem;
  }
`;

const Select = styled.select`
  padding: 0.6rem 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  cursor: pointer;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  max-width: 100%;

  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function BookingTableOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("status") || "all";
  const activeSort = searchParams.get("sort") || "startDate-desc";

  const handleFilter = (value) => {
    searchParams.set("status", value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const handleSort = (value) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  return (
    <TableOperations>
      <StyledFilter>
        {["all", "checked-out", "checked-in", "unconfirmed"].map((f) => (
          <FilterButton
            key={f}
            active={activeFilter === f}
            onClick={() => handleFilter(f)}
          >
            {f.replace("-", " ")}
          </FilterButton>
        ))}
      </StyledFilter>

      <Select value={activeSort} onChange={(e) => handleSort(e.target.value)}>
        <option value="startDate-desc">Sort by date (recent first)</option>
        <option value="startDate-asc">Sort by date (earlier first)</option>
        <option value="totalPrice-desc">Sort by amount (High to Low)</option>
        <option value="totalPrice-asc">Sort by amount (Low to High)</option>
      </Select>
    </TableOperations>
  );
}
