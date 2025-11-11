// Table.js
import React, { createContext, useContext } from "react";
import styled from "styled-components";

const TableContext = createContext();

const StyledTable = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: var(--border-radius-lg);
  background: var(--color-grey-0);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-md);
  font-size: 1.4rem;
  transition: all 0.3s ease;

  [data-theme="dark"] & {
    background: rgba(30, 41, 59, 0.7);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background: linear-gradient(
    135deg,
    var(--color-brand-600),
    var(--color-brand-500)
  );
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background-color: var(--color-grey-50);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid var(--color-grey-200);
    border-radius: var(--border-radius-md);
    background-color: var(--color-grey-50);
    box-shadow: var(--shadow-sm);
  }

  [data-theme="dark"] & {
    background-color: rgba(30, 41, 59, 0.6);
    border-bottom-color: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: 768px) {
      background-color: rgba(30, 41, 59, 0.9);
      border-color: rgba(255, 255, 255, 0.15);
    }
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.6rem;
  border-top: 1px solid var(--color-grey-100);

  &:empty {
    display: none;
  }

  [data-theme="dark"] & {
    background-color: rgba(15, 23, 42, 0.9);
    border-top-color: rgba(255, 255, 255, 0.1);
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 3.2rem 0;
  color: var(--color-grey-600);

  [data-theme="dark"] & {
    color: var(--color-grey-300);
  }
`;

export default function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
