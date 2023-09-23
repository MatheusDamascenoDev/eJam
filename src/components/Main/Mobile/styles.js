import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 3.125rem;

  .main {
    display: flex;
    align-items: flex-start;
    background: #f9f9f9;
    padding: 0 1.25rem;

    .section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
      height: 100%;

      .product-title {
        width: 100%;
        height: auto;

        h1 {
          font-size: 1.5rem;
          line-height: 2.1rem;
          font-weight: 400;
          font-family: "Manrope", Helvetica;
          color: #000000;
          text-align: center;

          span {
            color: #2c7ef8;
          }
        }
      }

      .product-details {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        .product-details-top {
          display: flex;
          align-items: center;
          gap: 1rem;

          .product-img {
            width: 5rem;
            height: 5rem;
            border-radius: 10px;
            background: #2c7ef8;

            img {
              width: 5rem;
              height: 5rem;
            }
          }

          .product-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            width: 100%;

            .product-name {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;

              h2 {
                font-size: 0.875rem;
                line-height: 1.225rem;
                font-weight: 400;
                font-family: "Manrope", Helvetica;
                color: #000000;
              }

              .product-price {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                p {
                  color: #969696;
                  font-size: 0.625rem;
                  line-height: normal;
                  font-weight: 600;
                  font-family: "Manrope", Helvetica;
                  text-decoration: line-through;
                }

                span {
                  color: #2c7ef8;
                  font-size: 0.875rem;
                  line-height: 1.225rem;
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
                width: 0.75rem;
                height: 0.75rem;
              }
            }

            .product-stock {
              display: flex;
              align-items: center;
              gap: 1rem;

              img {
                width: 0.75rem;
                height: 0.75rem;
              }

              p {
                color: #37465a;
                font-size: 0.75rem;
                line-height: normal;
                font-weight: 300;
                font-family: "Manrope", Helvetica;
              }
            }
          }
        }

        .product-resume {
          display: flex;
          align-items: flex-start;

          p {
            color: #4d5254;
            font-size: 0.75rem;
            line-height: 1.05rem;
            font-weight: 400;
            font-family: "Manrope", Helvetica;
            text-align: center;
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

          img {
            width: 1rem;
            height: 1rem;
          }

          p {
            color: #4d5254;
            font-size: 0.75rem;
            line-height: 1.2rem;
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
          width: 1.5rem;
          height: 1.5rem;
        }

        p {
          color: #000000;
          font-size: 0.875rem;
          line-height: 1.225rem;
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
        gap: 0.75rem;

        .button-buy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          width: 100%;

          button {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 1rem 3.5rem;
            background: #59ae43;
            border-radius: 3.125rem;
            border: none;
            gap: 1rem;
            cursor: pointer;

            p {
              color: #ffffff;
              font-size: 0.875rem;
              line-height: normal;
              font-weight: 700;
              font-family: "Manrope", Helvetica;
            }

            img {
              width: 0.8125rem;
              height: 0.9375rem;
            }
          }

          .order-benefits {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 0.5rem 0.83rem;
            width: 100%;
            justify-content: center;
            border: 1px solid #cfcfcf;
            border-radius: 4px;

            .order-benefits-top {
              display: flex;
              align-items: center;
              border-bottom: 1px solid #cfcfcf;
              padding-bottom: 0.75rem;
              width: 100%;

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
                  gap: 0.5rem;

                  img {
                    width: 0.75rem;
                    height: 0.75rem;
                  }
                }
              }
              ::after {
                content: "";
                width: 1px;
                margin: 0 0.75rem;
                height: 1rem;
                background: #cfcfcf;
              }
              :last-child::after {
                display: none;
              }
            }

            .order-benefits-bottom {
              padding-top: 0.75rem;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

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
          }
        }

        .refuse p {
          color: #f82c2c;
          font-size: 0.75rem;
          line-height: normal;
          font-weight: 500;
          font-family: "Manrope", Helvetica;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      .product-guarantee {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        img {
          width: 3rem;
          height: 3rem;
        }

        p {
          color: #4d5254;
          font-size: 0.75rem;
          line-height: 1.05rem;
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
