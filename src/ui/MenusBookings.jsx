import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.2rem 0.9rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  font-size: 2.2rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  min-width: 12rem;
  z-index: 9999;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
  }
`;

export default function MenusBookings({
  seeDetails,
  checkIn,
  checkOut,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const toggleRef = useRef();
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 4, left: rect.right - 180 });
    }
    setOpen((o) => !o);
  };

  return (
    <StyledMenu ref={ref}>
      <StyledToggle ref={toggleRef} onClick={handleToggle}>
        ⋮
      </StyledToggle>

      {open &&
        ReactDOM.createPortal(
          <StyledList style={{ top: position.top, left: position.left }}>
            <StyledButton
              onClick={() => {
                seeDetails();
                setOpen(false);
              }}
            >
              <HiEye />
              See details
            </StyledButton>
            {checkIn && (
              <StyledButton
                onClick={() => {
                  checkIn();
                  setOpen(false);
                }}
              >
                <HiArrowDownOnSquare />
                Check in
              </StyledButton>
            )}

            {checkOut && (
              <StyledButton
                onClick={() => {
                  checkOut();
                  setOpen(false);
                }}
              >
                <HiArrowUpOnSquare />
                Check out
              </StyledButton>
            )}
            <StyledButton
              onClick={() => {
                onDelete();
                setOpen(false);
              }}
            >
              <HiTrash />
              Delete booking
            </StyledButton>
          </StyledList>,
          document.body
        )}
    </StyledMenu>
  );
}
