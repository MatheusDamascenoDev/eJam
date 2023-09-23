import styled from "styled-components";

export const Container = styled.div`
  background: #252f3d;
  height: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .section {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 1.375rem;
      height: 1.375rem;
      margin-right: 0.5rem;
    }

    p {
      color: #ffffff;
      font-family: "Manrope", Helvetica;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0;
      line-height: 0.75rem;
      white-space: nowrap;
    }
  }
`;
