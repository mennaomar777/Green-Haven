import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import useBookings from "./useBookings";
import Loading from "../../ui/Loading";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";

const LoadError = styled.p`
  padding: 2rem;
  color: var(--color-red-700);
  background: var(--color-red-100);
  border-radius: var(--border-radius-md);
`;

function BookingTable() {
  const { bookings = [], isLoading, error, count } = useBookings();
  if (isLoading) return <Loading label="Loading bookings…" />;
  if (error) return <LoadError>Bookings could not be loaded. Please try again.</LoadError>;
  if (!bookings.length) return <Empty resource="bookings" />;

  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
