import styled, { css } from "styled-components";

const Heading = styled.h1`
  line-height: 1.4;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
      text-align: center;
    `}

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.as === "h1"
        ? "2.2rem"
        : props.as === "h2"
        ? "2rem"
        : props.as === "h3"
        ? "1.8rem"
        : "1.6rem"};
  }
`;

export default Heading;
