import React from "react";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

export default function CabinTable() {
  const { cabins = [], isLoading, error } = useCabins();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";
  const sortValue = searchParams.get("sort") || "name-asc";

  if (!cabins.length) {
    return <Empty resource="cabins" />;
  }

  // filter
  let filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // sort
  let sortedCabins = [...filteredCabins];
  if (sortValue === "name-asc")
    sortedCabins.sort((a, b) => a.name.localeCompare(b.name));
  if (sortValue === "name-desc")
    sortedCabins.sort((a, b) => b.name.localeCompare(a.name));
  if (sortValue === "regularPrice-asc")
    sortedCabins.sort((a, b) => a.regularPrice - b.regularPrice);
  if (sortValue === "regularPrice-desc")
    sortedCabins.sort((a, b) => b.regularPrice - a.regularPrice);
  if (sortValue === "maxCapacity-asc")
    sortedCabins.sort((a, b) => a.maxCapacity - b.maxCapacity);
  if (sortValue === "maxCapacity-desc")
    sortedCabins.sort((a, b) => b.maxCapacity - a.maxCapacity);

  if (isLoading) return <Spinner />;
  if (error) return <div>error!!</div>;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={sortedCabins}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
  );
}
