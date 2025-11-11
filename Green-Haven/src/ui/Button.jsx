import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    border: 1px solid var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
      border-color: var(--color-brand-700);
    }

    .dark-mode & {
      background-color: transparent;
      color: var(--color-brand-600);
      border: 1px solid var(--color-brand-600);

      &:hover {
        background-color: rgba(11, 128, 67, 0.15);
        color: #fff;
        border-color: var(--color-brand-600);
      }
    }
  `,

  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }

    .dark-mode & {
      background-color: transparent;
      color: var(--color-grey-600);
      border: 1px solid var(--color-grey-400);

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff;
      }
    }
  `,

  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    border: 1px solid var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
      border-color: var(--color-red-800);
    }

    .dark-mode & {
      background-color: transparent;
      color: var(--color-red-700);
      border: 1px solid var(--color-red-700);

      &:hover {
        background-color: rgba(185, 28, 28, 0.15);
        color: #fff;
        border-color: var(--color-red-700);
      }
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) => sizes[props.size || "medium"]}
  ${(props) => variations[props.variation || "primary"]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
