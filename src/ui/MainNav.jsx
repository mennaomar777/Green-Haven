import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  Home,
  CalendarDays,
  Home as HomeModern,
  Users,
  Settings,
} from "lucide-react";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 1.6rem;
    border-radius: var(--border-radius-sm);
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  &.active:link, &.active:visited {
    background-color: var(--color-green-100);
    color: var(--color-green-800);
    box-shadow: inset 3px 0 0 var(--color-brand-600);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  .dark-mode &.active:link, .dark-mode &.active:visited {
    background-color: rgba(78, 173, 105, 0.16);
    color: #b8e3c2;
    box-shadow: inset 3px 0 0 #69c781;
  }

  .dark-mode &:hover,
  .dark-mode &:active {
    background-color: rgba(255, 255, 255, 0.06);
    color: #edf4ee;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  .dark-mode & svg { color: #91a596; }
  .dark-mode &:hover svg,
  .dark-mode &.active svg { color: #83d498; }
`;

export default function MainNav({ onNavClick }) {
  const handleClick = () => {
    if (onNavClick) onNavClick();
  };

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard" onClick={handleClick}>
            <Home size={24} />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" onClick={handleClick}>
            <CalendarDays size={24} />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" onClick={handleClick}>
            <HomeModern size={24} />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" onClick={handleClick}>
            <Users size={24} />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" onClick={handleClick}>
            <Settings size={24} />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
