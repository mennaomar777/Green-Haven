import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Select = styled.select`
  padding: 0.6rem 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  cursor: pointer;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
`;

export default function SortByCabins() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  return (
    <Select onChange={(e) => handleChange(e.target.value)}>
      <option value="name-asc">Sort by name (A to Z)</option>
      <option value="name-desc">Sort by name (Z to A)</option>
      <option value="regularPrice-asc">Sort by price (Low to High)</option>
      <option value="regularPrice-desc">Sort by price (High to Low)</option>
      <option value="maxCapacity-asc">Sort by capacity (Low to High)</option>
      <option value="maxCapacity-desc">Sort by capacity (High to Low)</option>
    </Select>
  );
}
