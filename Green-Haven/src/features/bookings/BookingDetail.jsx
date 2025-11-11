// features/bookings/BookingDetail.jsx
import styled from "styled-components";
import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import useBooking from "./useBooking";
import useCheckout from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import { useState } from "react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--color-grey-200);
  margin-bottom: 2.4rem;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBookingMutate, isDeleting } = useDeleteBooking();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  const { id: bookingId, status } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Header>
        <TitleGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </TitleGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Header>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            variation="primary"
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            variation="primary"
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}

        <Button
          variation="danger"
          onClick={() => setIsOpenDeleteModal(true)}
          disabled={isDeleting}
        >
          Delete
        </Button>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>

      {isOpenDeleteModal && (
        <Modal onClose={() => setIsOpenDeleteModal(false)}>
          <ConfirmDelete
            resourceName="booking"
            onConfirm={() =>
              deleteBookingMutate(bookingId, {
                onSettled: () => navigate(-1),
              })
            }
            disabled={isDeleting}
            onCloseDeleteModal={() => setIsOpenDeleteModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default BookingDetail;
