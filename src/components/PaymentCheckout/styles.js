import styled from "styled-components";

export const CheckoutContainer = styled.section`
  max-width: 900px;
  height: 180vh;
  background-color: coral;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 900px;
    height: 90vh;
    flex-flow: row nowrap;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const FirstBox = styled.div`
  max-width: 450px;
  height: 100%;
  background-color: royalblue;
  padding: 20px 30px;
`;

export const UserName = styled.div`
  width: 100%;
  height: 5vh;
  background-color: rebeccapurple;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;

  & > img {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-half);
  }

  & > h2 {
    padding-left: 20px;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
  }
`;

export const BoxInner1 = styled.div`
  width: 100%;
  height: 45%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
  background-color: green;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-400);
    color: var(--color-white-mode);
    margin-bottom: 20px;
  }
`;

export const CheckoutTitle = styled.div`
  width: 100%;
  height: 5vh;
  background-color: red;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0px 20px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-500);
    color: var(--color-white-mode);
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: white;
  }
`;

export const CheckoutCardSpace = styled.div`
  width: 100%;
  height: 30vh;
  background-color: aliceblue;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`;

export const CheckoutCard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
  background-color: var(--color-grey-ex-1);
  border-radius: var(--radius-4);

  & > span {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    color: var(--color-primary);
    width: 30%;
    text-align: right;
  }
`;

export const CheckoutCardTitle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 20px;

  & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    color: var(--color-black-mode);
  }
  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
  }
`;

/*------------------------- Skip line -------------------------*/

export const SecondBox = styled.section`
  max-width: 450px;
  height: 100%;
  background-color: green;
  padding: 20px 30px;
`;

export const BoxInner2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
`;

export const PaymentDetails = styled.div`
  width: 100%;
  height: 8vh;
  background-color: aliceblue;

  & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    color: var(--color-black-mode);
    margin-bottom: 10px;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-400);
    color: var(--color-black-mode);
  }
`;

export const FormSpace = styled.form`
  width: 100%;
  height: 90%;
  background-color: royalblue;

  & input {
    background-color: var(--color-white-mode);
    width: 100%;
    height: 30px;
    border: 1px solid var(--color-black-mode);
    border-radius: var(--radius-4);
  }
`;

export const EmailSpace = styled.div`
  width: 100%;
  height: 7vh;
  background-color: grey;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 10px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
  }
`;

export const CardDetails = styled.div`
  width: 100%;
  height: 60vh;
  background-color: red;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
    margin-bottom: 10px;
  }
`;

export const CardDetailsInputDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-white-mode);
  border-radius: var(--radius-4);
  margin-bottom: 20px;

  & > input {
    width: 50%;
    border: none;
    border-radius: 4px 0px 0px 4px;
  }
`;

export const CardDetailsInputDates = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  justify-content: center;

  & > input {
    border: none;
    border-radius: 0;
  }
`;

export const CardHolderName = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: rebeccapurple;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
    margin-bottom: 10px;
  }
`;

export const BillingAddress = styled.div`
  width: 100%;
  height: 35vh;
  background-color: gold;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
    margin-bottom: 10px;
  }
`;

export const AddressDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  & > select {
    width: 100%;
    height: 30px;
    border-radius: 4px 4px 0 0;
  }
`;

export const StateDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  & > input {
    width: 50%;
    height: 30px;
    border-radius: 0px;
  }
`;

export const VATNumber = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  background-color: red;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
    margin-bottom: 10px;
  }
`;

export const VATCheck = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  background-color: var(--color-white-mode);
  border-radius: var(--radius-4);

  & > input {
    border: none;
  }
`;

export const Subtotal = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: grey;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    align-items: center;
  }

  & > div > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
  }
  & > div > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    color: var(--color-black-mode);
  }
`;

export const PayButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--color-primary);
  color: var(--color-black-mode);
  border-radius: var(--radius-4);
  border: none;
  margin-top: 15px;
`;
