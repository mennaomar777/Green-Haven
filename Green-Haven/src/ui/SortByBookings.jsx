import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Select = styled.select`
  padding: 0.6rem 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.5rem 0.8rem;
  }
`;

export default function SortByBookings() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(value) {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  }

  return (
    <Select onChange={(e) => handleChange(e.target.value)}>
      <option value="startDate-desc">Sort by date (recent first)</option>
      <option value="startDate-asc">Sort by date (earlier first)</option>
      <option value="totalPrice-desc">Sort by amount (High to Low)</option>
      <option value="totalPrice-asc">Sort by amount (Low to High)</option>
    </Select>
  );
}
