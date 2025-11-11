import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import styled from "styled-components";

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  width: 100%;
`;

export default function Cabins() {
  return (
    <>
      <Row
        type="horizontal"
        style={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Heading as="h1">All Cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row type="vertical" style={{ gap: "0" }}>
        <CabinTable />
        <AddButtonContainer>
          <AddCabin />
        </AddButtonContainer>
      </Row>
    </>
  );
}
