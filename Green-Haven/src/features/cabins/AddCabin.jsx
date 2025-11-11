import React from "react";
import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "../cabins/CreateCabinForm";
import Modal from "../../ui/Modal";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  max-width: 120rem;
  margin: 2rem auto 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    width: 95%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`;

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <ButtonContainer>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </ButtonContainer>
  );
}
