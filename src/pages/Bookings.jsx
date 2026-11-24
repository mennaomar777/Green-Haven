import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";

const BookingsHeader = styled.div`
  margin-bottom: 2.4rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  h1 { letter-spacing: -0.03em; }

  @media (max-width: 768px) {
    margin-bottom: 1.8rem;
    padding-bottom: 1.2rem;
    & > div { align-items: stretch; }
  }
`;

function Bookings() {
  return (
    <>
      <BookingsHeader>
        <Row type="horizontal">
          <Heading as="h1">All Bookings</Heading>
          <BookingTableOperations />
        </Row>
      </BookingsHeader>
      <BookingTable />
    </>
  );
}

export default Bookings;
