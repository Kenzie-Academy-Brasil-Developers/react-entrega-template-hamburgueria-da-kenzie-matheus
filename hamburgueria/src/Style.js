import styled from "styled-components";

export const Slyleddiv = styled.div`
  padding: 0px 10px 0px 10px;

  display: flex;
  flex-direction: column;

  gap: 25px;

  @media (min-width: 769px) {
    flex-direction: row;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }
`;
export const DivContainer = styled.div`
  @media (min-width: 769px) {
    max-width: 1600px;
    margin: 0 auto;
  }
`;
export const DivHeaderContainer = styled.div`
  background-color: #f5f5f5;
`;
