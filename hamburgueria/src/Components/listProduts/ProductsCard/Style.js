import styled from "styled-components";

export const Slyledli = styled.li`
  min-width: 250px;
  height: fit-content;
  background-color: var(--grey-0);

  border: 2px solid #e0e0e0;

  img {
    width: 100%;
    height: 177px;
  }
`;
export const Containercontent = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 15px;
  height: 100%;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  span {
    color: var(--grey-50);

    font-size: 0.8rem;
    font-weight: 400;
  }

  p {
    color: var(--Color-primary);
  }

  button {
    width: 106px;
    height: 40px;
  }
`;
