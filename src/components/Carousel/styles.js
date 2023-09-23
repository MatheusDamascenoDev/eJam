import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    z-index: 1;
  }

  .carousel-button.prev {
    left: 0;
  }

  .carousel-button.next {
    right: 0;
  }

  .carousel-content {
    display: flex;
    overflow: hidden;
  }

  .carousel-slide {
    flex: 0 0 100%;
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .carousel-slide img {
    width: 1.375rem;
    height: 1.375rem;
    margin-right: 0.5rem;
  }

  .carousel-slide p {
    color: #ffffff;
    font-family: "Manrope", Helvetica;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
