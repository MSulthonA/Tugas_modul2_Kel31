import styled, { css } from "styled-components";
export default styled.h1`
  font-family: "roboto";
  font-size: 2rem;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  background: green;
  margin: 1pc 6pc;
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}
  color:white;
  &:hover {
    text-decoration: underline;
  }
`;
