// features/bookings/BookingDetails.jsx
import React from "react";
import BookingDetail from "../features/bookings/BookingDetail";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function BookingDetails() {
  return (
    <PageContainer>
      <BookingDetail />
    </PageContainer>
  );
}
