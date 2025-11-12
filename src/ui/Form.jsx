import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  ${(props) =>
    props.type === "regular" &&
    css`
      max-width: 50rem;
      width: 100%;
      margin: 0 auto;
    `}

  @media (max-width: 1024px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 2rem 3rem;
      `}

    ${(props) =>
      props.type === "modal" &&
      css`
        width: 70rem;
      `}
      
    ${(props) =>
      props.type === "regular" &&
      css`
        max-width: 60rem;
      `}
  }

  @media (max-width: 768px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 1.6rem 2rem;
      `}

    ${(props) =>
      props.type === "modal" &&
      css`
        width: 90%;
        max-width: 60rem;
      `}
      
    ${(props) =>
      props.type === "regular" &&
      css`
        max-width: 95%;
      `}
      
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    ${(props) =>
      props.type !== "regular" &&
      css`
        padding: 1.2rem 1.5rem;
      `}

    ${(props) =>
      props.type === "modal" &&
      css`
        width: 95%;
        margin: 0 auto;
      `}
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
