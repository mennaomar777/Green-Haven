import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import { isToday } from "date-fns";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 8.5rem 2rem minmax(8rem, 1fr) auto auto;
  gap: 1.2rem;
  align-items: center;
  min-width: 0;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media (max-width: 760px) {
    grid-template-columns: auto 2rem minmax(0, 1fr) auto;
    gap: 0.8rem;
    padding: 1rem 0;
    & > :nth-child(1) { grid-column: 1; grid-row: 1 / span 2; }
    & > :nth-child(2) { grid-column: 2; grid-row: 1 / span 2; }
    & > :nth-child(3) { grid-column: 3; grid-row: 1; }
    & > :nth-child(4) { grid-column: 3; grid-row: 2; }
    & > a, & > button { grid-column: 4; grid-row: 1 / span 2; }
  }

  @media (max-width: 420px) {
    grid-template-columns: auto minmax(0, 1fr) auto;
    & > :nth-child(2) { display: none; }
    & > :nth-child(1) { grid-column: 1; grid-row: 1 / span 2; }
    & > :nth-child(3) { grid-column: 2; grid-row: 1; }
    & > :nth-child(4) { grid-column: 2; grid-row: 2; }
    & > a, & > button {
      grid-column: 3;
      grid-row: 1 / span 2;
      justify-self: end;
      white-space: nowrap;
    }
  }
`;

const Guest = styled.div`
  font-weight: 500;
  min-width: 0;
  overflow-wrap: anywhere;
`;

export default function TodayItem({ activity }) {
  return (
    <StyledTodayItem>
      {activity.status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {activity.status === "checked-in" && (
        <Tag type="blue">
          {isToday(new Date(activity.endDate)) ? "Departing" : "In house"}
        </Tag>
      )}
      <Flag
        src={activity.guests.countryFlag}
        alt={`Flag of ${activity.guests.country}`}
      />
      <Guest>{activity.guests.fullName}</Guest>
      <div>{activity.numNights} nights</div>
      {activity.status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${activity.id}`}
        >
          Check in
        </Button>
      )}
      {activity.status === "checked-in" &&
        isToday(new Date(activity.endDate)) && (
          <CheckoutButton bookingId={activity.id} />
        )}
    </StyledTodayItem>
  );
}
