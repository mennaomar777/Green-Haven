import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import styled from "styled-components";

const DashboardHeader = styled.div`
  margin-bottom: 2.4rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-grey-200);

  h1 { letter-spacing: -0.04em; }
`;

function Dashboard() {
  return (
    <>
      <DashboardHeader>
        <Row type="horizontal">
          <Heading as="h1">Dashboard</Heading>
          <DashboardFilter />
        </Row>
      </DashboardHeader>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
