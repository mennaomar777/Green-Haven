import React from "react";
import FilterCabins from "../../ui/FilterCabins";
import TableOperations from "../../ui/TableOperations";
import SortByCabins from "../../ui/SortByCabins";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <FilterCabins />
      <SortByCabins />
    </TableOperations>
  );
}
