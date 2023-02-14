import styled from "styled-components";
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 25px;
  height: 140px;

  background-color: #f5f5f5;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: 1600px;
    margin: 0 auto;

    height: 80px;
  }
`;

export const Searchbar = styled.div`
  background-color: white;
  display: flex;
  padding: 10px;

  width: 90%;
  border-radius: var(--border-radius-default);
  border: 2px solid var(--grey-20);

  input {
    border: transparent;
    width: 100%;
  }

  button {
    background-color: #27ae60;

    height: 35px;
    width: 100px;
  }
  @media (min-width: 769px) {
    width: 365px;
  }
`;
