import styled from "styled-components";

export const Ulproducts = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  gap: 15px;

  height: fit-content;

  @media (min-width: 769px) {
    width: 74%;
    flex-wrap: wrap;
    overflow: hidden;
  }
`;
