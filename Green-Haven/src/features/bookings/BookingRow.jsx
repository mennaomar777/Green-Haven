import styled from "styled-components";
import { format, isToday } from "date-fns";
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import MenusBookings from "../../ui/MenusBookings";
import { useNavigate } from "react-router-dom";
import useCheckout from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  & span:first-child {
    font-weight: 500;
  }
  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({ booking }) {
  const navigate = useNavigate();
  const { checkout } = useCheckout();
  const { deleteBookingMutate, isDeleting } = useDeleteBooking();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests,
    cabins: { name: cabinName },
  } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>
      <Stacked>
        <span>{guests?.fullName}</span>
        <span>{guests?.email}</span>
      </Stacked>
      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      <Amount>{formatCurrency(totalPrice)}</Amount>
      <MenusBookings
        seeDetails={() => navigate(`/bookings/${bookingId}`)}
        {...(status === "unconfirmed" && {
          checkIn: () => navigate(`/checkin/${bookingId}`),
        })}
        {...(status === "checked-in" && {
          checkOut: () => checkout(bookingId),
        })}
        onDelete={() => setIsOpenDeleteModal(true)}
      />
      {isOpenDeleteModal && (
        <Modal onClose={() => setIsOpenDeleteModal(false)}>
          <ConfirmDelete
            resourceName={"booking"}
            onConfirm={() => deleteBookingMutate(bookingId)}
            disabled={isDeleting}
            onCloseDeleteModal={() => setIsOpenDeleteModal(false)}
          />
        </Modal>
      )}
    </Table.Row>
  );
}

export default BookingRow;
