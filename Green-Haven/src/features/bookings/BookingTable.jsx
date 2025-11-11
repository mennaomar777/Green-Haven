import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import useBookings from "./useBookings";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings = [], isLoading, error, count } = useBookings();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status") || "all";
  const sortedValue = searchParams.get("sort") || "startDate-desc";

  if (isLoading) return <Spinner />;
  if (error) console.log(error);
  if (!bookings.length) return <Empty resource="bookings" />;

  // Filter
  const filteredBookings =
    filterValue === "all"
      ? bookings
      : bookings.filter((b) => b.status === filterValue);

  // Sort
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (sortedValue === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sortedValue === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sortedValue === "totalPrice-desc") return b.totalPrice - a.totalPrice;
    if (sortedValue === "totalPrice-asc") return a.totalPrice - b.totalPrice;
    return 0;
  });

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
        data={sortedBookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
