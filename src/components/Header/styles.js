import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.875rem 7.9375rem;

  .logo {
    width: 12rem;
    height: 2rem;

    img {
      object-fit: cover;
    }
  }

  .items {
    align-items: flex-start;
    display: inline-flex;
    gap: 2rem;

    img {
      width: 5.125rem;
      height: 2rem;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    padding: 1.25rem;

    .logo {
      display: flex;
      align-items: center;
      
      img {
        width: 6.6875rem;
        height: 1.25rem;
        object-fit: cover;
      }
    }

    .items {
      gap: 1rem;

      img {
        width: 2.75rem;
        height: 1rem;
        object-fit: cover;
      }
    }
  }
`;
