import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  padding: 1.5rem 7.9375rem;
  background: #252f3d;

  .sections {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .first-section {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.4rem;
          font-family: "Manrope", Helvetica;
        }
      }
      ::after {
        content: "";
        width: 1px;
        margin: 0 1rem;
        height: 1.5rem;
        background: #ffffff;
        color: #ffffff;
      }
      :last-child::after {
        display: none;
      }
    }

    .second-section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      img {
        width: 1rem;
        height: 1rem;
      }

      p {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4rem;
        font-family: "Manrope", Helvetica;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    width: 100%;
    height: 100%;

    .sections {
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      .first-section {
        width: 100%;
        padding: 0.5rem 0;

        div p {
          font-size: 0.75rem;
          line-height: 1.05rem;
        }
        ::after {
          content: "";
          width: 1px;
          height: 0.875rem;
          margin: 0 0.75rem;
        }
      }

      .second-section {
        gap: 1rem;
        width: 100%;

        img {
          width: 0.8125rem;
          height: 0.8125rem;
        }

        p {
          font-size: 0.75rem;
          line-height: 1.125rem;
        }
      }
    }
  }
`;
