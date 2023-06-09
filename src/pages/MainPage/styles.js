import styled from "styled-components";

export const MainSpace = styled.main`
  width: 100%;
  height: 200vh;
  background-color: var(--color-grey-ex-1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    height: 170vh;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const QrCodeSpace = styled.section`
  width: 900px;
  height: 50vh;
  background-color: royalblue;
`;
