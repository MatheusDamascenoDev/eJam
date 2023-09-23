import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h1 {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: 400;
      font-family: "Manrope", Helvetica;
      color: #000000;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 400;
      font-family: "Manrope", Helvetica;
      color: #4d5254;
    }
  }

  @media (max-width: 768px) {
    margin-top: 3.125rem;
    .label {
      gap: 0.5rem;
      h1 {
        font-size: 2rem;
        line-height: 2.8rem;
        text-align: center;
      }

      p {
        font-size: 1rem;
        line-height: 1.4rem;
        text-align: center;
      }
    }
  }
`;