import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import EditCabinForm from "./EditCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const { deleteCabinMutate, isDeleting } = useDeleteCabin();
  const { createCabinMutate } = useCreateCabin();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleDuplicate = () => {
    createCabinMutate({
      name: `Copy of ${cabin.name}`,
      maxCapacity: cabin.maxCapacity,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      image: cabin.image,
      description: cabin.description,
    });
  };

  return (
    <>
      <Table.Row role="row">
        <Img src={cabin.image} alt={cabin.name} />
        <Cabin>{cabin.name}</Cabin>
        <div>Fits up to {cabin.maxCapacity} guests</div>
        <Price>{formatCurrency(cabin.regularPrice)}</Price>
        {cabin.discount ? (
          <Discount>{formatCurrency(cabin.discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Menus
            onEdit={() => setIsOpenModal((show) => !show)}
            onDuplicate={handleDuplicate}
            onDelete={() => setIsOpenDeleteModal((show) => !show)}
          />

          {isOpenDeleteModal && (
            <Modal onClose={() => setIsOpenDeleteModal(false)}>
              <ConfirmDelete
                resourceName={"cabins"}
                onConfirm={() => deleteCabinMutate(cabin.id)}
                disabled={isDeleting}
                onCloseDeleteModal={() => setIsOpenDeleteModal(false)}
              />
            </Modal>
          )}
        </div>
      </Table.Row>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <EditCabinForm
            cabin={cabin}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </>
  );
}
