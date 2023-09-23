import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .main {
    display: flex;
    align-items: flex-start;
    background: #f9f9f9;
    padding: 2.5rem;
    max-width: 77.8125rem;
    min-height: 54.9375rem;
    border-radius: 10px;
    gap: 2rem;

    .section-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
      gap: 1.5rem;

      .section-img {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 35.9375rem;
          height: 36.9375rem;
          object-fit: cover;
        }
      }

      .section-review {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.125rem;
        padding: 1.5rem;
        background: #ffffff;

        .customer {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          gap: 0.8125rem;

          .customer-img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
          }

          .customer-details {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;

            .stars {
              display: flex;
              align-items: center;
            }

            .customer-name {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: 0.625rem;

              p {
                font-size: 0.875rem;
                line-height: 1.125rem;
                font-weight: 700;
                font-family: "Manrope", Helvetica;
              }

              img {
                width: 1rem;
                height: 1rem;
              }

              span {
                font-size: 0.75rem;
                line-height: 0.875rem;
                font-weight: 400;
                font-family: "Manrope", Helvetica;
                color: #5bb59a;
              }
            }
          }
        }

        .review {
          display: flex;
          align-items: center;

          p {
            color: #4d5254;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 400;
            font-family: "Manrope", Helvetica;
          }
        }
      }
    }

    .section-right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      width: 50%;
      height: 100%;

      .product-title {
        width: 100%;
        height: auto;

        h1 {
          font-size: 2rem;
          line-height: 2.8rem;
          font-weight: 400;
          font-family: "Manrope", Helvetica;
          color: #000000;

          span {
            color: #2c7ef8;
          }
        }
      }

      .product-details {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;

        .product-img {
          width: 8.375rem;
          height: 8.375rem;
          border-radius: 10px;
          background: #2c7ef8;
        }

        .product-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.9375rem;
          height: 8.375rem;

          .product-name {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 1rem;

            h2 {
              font-size: 1.25rem;
              line-height: 1.75rem;
              font-weight: 400;
              font-family: "Manrope", Helvetica;
              color: #000000;
            }

            .product-price {
              display: flex;
              align-items: center;
              gap: 0.625rem;

              p {
                color: #969696;
                font-size: 1rem;
                line-height: normal;
                font-weight: 600;
                font-family: "Manrope", Helvetica;
                text-decoration: line-through;
              }

              span {
                color: #2c7ef8;
                font-size: 1.375rem;
                line-height: 1.925rem;
                font-weight: 600;
                font-family: "Manrope", Helvetica;
              }
            }
          }

          .product-stars {
            display: flex;
            align-items: center;
            justify-content: center;

            img {
              width: 1.125rem;
              height: 1.125rem;
            }
          }

          .product-stock {
            display: flex;
            align-items: center;
            gap: 1rem;

            img {
              width: 1rem;
              height: 1rem;
            }

            p {
              color: #37465a;
              font-size: 1rem;
              line-height: normal;
              font-weight: 300;
              font-family: "Manrope", Helvetica;
            }
          }

          .product-resume {
            display: flex;
            align-items: flex-start;

            p {
              color: #4d5254;
              font-size: 1rem;
              line-height: 1.4rem;
              font-weight: 400;
              font-family: "Manrope", Helvetica;
            }
          }
        }
      }

      .product-informations {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        .product-informaions-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          height: 1.375rem;

          img {
            width: 1.375rem;
            height: 1.375rem;
          }

          p {
            color: #4d5254;
            font-size: 1rem;
            line-height: 1.6rem;
            font-weight: 400;
            font-family: "Manrope", Helvetica;

            strong {
              font-weight: 700;
            }
          }
        }
      }

      .product-discount {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 1rem;
        background: #edf3fc;
        width: 100%;
        border-radius: 10px;

        img {
          width: 2rem;
          height: 2rem;
        }

        p {
          color: #000000;
          font-size: 1rem;
          line-height: 1.4rem;
          font-weight: 400;
          font-family: "Manrope", Helvetica;

          span {
            color: #2c7ef8;
          }
        }
      }

      .order-buy {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;

        .button-buy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          width: 100%;

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1rem 4rem;
            background: #59ae43;
            border-radius: 3.125rem;
            border: none;
            gap: 1.235rem;
            cursor: pointer;

            p {
              color: #ffffff;
              font-size: 1.25rem;
              line-height: normal;
              font-weight: 700;
              font-family: "Manrope", Helvetica;
            }

            img {
              width: 1.0625rem;
              height: 0.9375rem;
            }
          }

          .order-benefits {
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            width: 100%;
            justify-content: center;
            border: 1px solid #cfcfcf;
            border-radius: 4px;

            .order-benefits-item {
              display: flex;
              align-items: center;
              justify-content: center;

              p {
                font-size: 0.75rem;
                line-height: 1.05rem;
                font-weight: 400;
                font-family: "Manrope", Helvetica;
                color: #4d5254;
              }

              .order-benefits-item-ssl {
                display: flex;
                align-items: center;
                gap: 0.625rem;

                img {
                  width: 0.75rem;
                  height: 0.75rem;
                }
              }

              .order-benefits-item-cards {
                display: flex;
                align-items: center;
                gap: 0.125rem;

                img {
                  width: 1.5rem;
                  height: 0.875rem;
                }
              }
            }
            ::after {
              content: "";
              width: 1px;
              margin: 0 1rem;
              height: 1rem;
              background: #cfcfcf;
            }
            :last-child::after {
              display: none;
            }
          }
        }

        .refuse p {
          color: #f82c2c;
          font-size: 1.125rem;
          line-height: normal;
          font-weight: 500;
          font-family: "Manrope", Helvetica;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .product-guarantee {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 5.5rem;
          height: 5.5rem;
        }

        p {
          color: #4d5254;
          font-size: 1rem;
          line-height: 1.4rem;
          font-weight: 400;
          font-family: "Manrope", Helvetica;

          strong {
            font-weight: 700;
          }
        }
      }
    }
  }
`;
