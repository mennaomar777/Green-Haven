// features/bookings/BookingDataBox.jsx
import styled from "styled-components";
import { format } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";
import { formatCurrency } from "../../utils/helpers";

const StyledBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const Header = styled.header`
  background: linear-gradient(
    135deg,
    var(--color-brand-600),
    var(--color-brand-700)
  );
  padding: 2.4rem 4rem;
  color: var(--color-brand-50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  span {
    font-family: "Sono", sans-serif;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem;
`;

const GuestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  & > span {
    color: var(--color-grey-500);
  }

  & > p {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-md);
  margin-top: 2.4rem;
  font-weight: 600;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: currentColor;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  text-align: right;
  font-size: 1.3rem;
  color: var(--color-grey-500);
  border-top: 1px solid var(--color-grey-200);
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in <span>{cabinName}</span>
          </p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <GuestInfo>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>{guestName}</p>
          {numGuests > 1 && <span>+ {numGuests - 1} guests</span>}
          <span>•</span>
          <p>{email}</p>
          <span>•</span>
          <p>National ID: {nationalID}</p>
        </GuestInfo>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Notes"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast">
          {hasBreakfast ? "Included" : "Not included"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total">
            {formatCurrency(totalPrice)}
            {hasBreakfast && (
              <small>
                {" "}
                ({formatCurrency(cabinPrice)} + {formatCurrency(extrasPrice)})
              </small>
            )}
          </DataItem>
          <p>{isPaid ? "PAID" : "PAY ON ARRIVAL"}</p>
        </Price>
      </Section>

      <Footer>
        Booked on {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
      </Footer>
    </StyledBox>
  );
}

export default BookingDataBox;
