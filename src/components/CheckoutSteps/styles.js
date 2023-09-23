import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3.5rem 0;

  .steps {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 77.8125rem;

    .step {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;

      .selected {
        font-weight: 700;
      }

      .circle-check {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #85bf55;
        background: #85bf55;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

        img {
          width: 1.4375rem;
          height: 1.0625rem;
        }
      }

      .circle-select {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #2c7ef8;
        background: #2c7ef8;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

        p {
          color: #ffffff;
        }
      }

      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #2c7ef8;
        background: #ffffff;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

        p {
          color: #2c7ef8;
        }
      }

      p {
        font-family: "Manrope", Helvetica;
        font-size: 1.25rem;
        line-height: 1.375rem;
        font-weight: 400;
        color: #000000;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    .steps {
      justify-content: space-evenly;
      .step {
        flex-direction: column;
        gap: 0.5rem;

        .circle-check {
          width: 1.25rem;
          height: 1.25rem;

          img {
            width: 0.875rem;
            height: 0.875rem;
          }
        }

        .circle-select, .circle {
          width: 1.25rem;
          height: 1.25rem;
          border: 1px solid #2c7ef8;
          display: flex;

          p {
            font-size: 0.875rem;
          }
        }

        p {
          font-size: 0.75rem;
          line-height: 0.875rem;
        }

        span {
          display: none;
        }
      }
    }
  }
`;
