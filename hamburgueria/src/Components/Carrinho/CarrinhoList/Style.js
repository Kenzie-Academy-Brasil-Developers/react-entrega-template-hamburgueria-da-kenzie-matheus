import styled from "styled-components";
export const LiCarrinho = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25px;

  padding: 15px;

  img {
    width: 70px;
    height: 70px;

    background-color: #e0e0e0;

    border-radius: var(--border-radius-default);
  }

  button {
    border: none;
    background-color: var(--grey-0);
    color: #bdbdbd;
  }
`;
export const DivContainerdesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  span {
    font-size: 0.9rem;
    font-weight: 400;

    color: var(--grey-50);
  }
`;
