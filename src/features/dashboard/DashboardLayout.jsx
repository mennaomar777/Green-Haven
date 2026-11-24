import styled from "styled-components";
import Loading from "../../ui/Loading";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.6rem;
  }
`;

export default function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { isLoading: isStays, confirmedStays, numDays } = useRecentStays();
  const { cabins = [], isLoading: isCabins } = useCabins();
  const cabinCount = cabins.length;

  if (isLoading || isStays || isCabins)
    return <Loading minHeight="38rem" label="Loading dashboard…" />;
  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
