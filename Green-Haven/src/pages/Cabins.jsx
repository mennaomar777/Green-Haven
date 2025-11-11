import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

export default function Cabins() {
  return (
    <>
      <Row
        type="horizontal"
        style={{ justifyContent: "space-between", flexWrap: "wrap" }}
      >
        <Heading as="h1">All Cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row type="vertical" style={{ gap: "2.4rem" }}>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
