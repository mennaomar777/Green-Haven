import styled, { keyframes } from "styled-components";
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

const shimmer = keyframes`
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
`;

const SkeletonBlock = styled.div`
  background: linear-gradient(
    90deg,
    var(--color-grey-100) 25%,
    var(--color-grey-50) 50%,
    var(--color-grey-100) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 0.8rem;
`;

const LoadingStat = styled.div`
  min-height: 10rem;
  padding: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
`;

const LoadingStatContent = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
`;

const LoadingPanel = styled.div`
  min-height: 34rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background: var(--color-grey-0);
  box-shadow: var(--shadow-sm);

  &:last-child { grid-column: 1 / -1; min-height: 30rem; }
  @media (max-width: 640px) { padding: 1.8rem; min-height: 28rem; }
`;

const LoadingMessage = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

function DashboardLoadingState() {
  return (
    <StyledDashboardLayout role="status" aria-label="Loading dashboard">
      <LoadingMessage>Loading dashboard data…</LoadingMessage>
      {Array.from({ length: 4 }, (_, index) => (
        <LoadingStat key={index} aria-hidden="true">
          <SkeletonBlock style={{ width: 5.6 + "rem", height: 5.6 + "rem", borderRadius: "50%" }} />
          <LoadingStatContent>
            <SkeletonBlock style={{ width: "58%", height: "1.2rem" }} />
            <SkeletonBlock style={{ width: "76%", height: "2.4rem" }} />
          </LoadingStatContent>
        </LoadingStat>
      ))}
      <LoadingPanel aria-hidden="true">
        <SkeletonBlock style={{ width: "9rem", height: "2.4rem" }} />
        <SkeletonBlock style={{ flex: 1 }} />
      </LoadingPanel>
      <LoadingPanel aria-hidden="true">
        <SkeletonBlock style={{ width: "65%", height: "2.4rem" }} />
        <SkeletonBlock style={{ flex: 1, borderRadius: "50%", maxWidth: "22rem", alignSelf: "center" }} />
      </LoadingPanel>
      <LoadingPanel aria-hidden="true">
        <SkeletonBlock style={{ width: "45%", height: "2.4rem" }} />
        <SkeletonBlock style={{ flex: 1 }} />
      </LoadingPanel>
    </StyledDashboardLayout>
  );
}

export default function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { isLoading: isStays, confirmedStays, numDays } = useRecentStays();
  const { cabins = [], isLoading: isCabins } = useCabins();
  const cabinCount = cabins.length;

  if (isLoading || isStays || isCabins) return <DashboardLoadingState />;
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
