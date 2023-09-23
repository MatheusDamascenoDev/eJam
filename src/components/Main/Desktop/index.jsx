import { Container } from "./styles";
import ProductImage from "../../../assets/product-image.png";
import CustomerImg from "../../../assets/customer.png";
import Stars from "../../../assets/stars.svg";
import Verify from "../../../assets/verify1.svg";
import ProductImgSmall from "../../../assets/product-img-small.png";
import Star from "../../../assets/star.svg";
import SelectedCircle from "../../../assets/selected-circle.svg";
import CheckBlue from "../../../assets/check-blue.svg";
import DiscountPercentage from "../../../assets/discount-percentage.svg";
import ArrowLine from "../../../assets/arrow-line.svg";
import Lock from "../../../assets/lock.svg";
import Visa from "../../../assets/visa.svg";
import ShopPay from "../../../assets/shop-pay.svg";
import PayPal from "../../../assets/paypal.svg";
import MasterCard from "../../../assets/mastercard.svg";
import GPay from "../../../assets/gpay.svg";
import ApplePay from "../../../assets/apple-pay.svg";
import Amex from "../../../assets/amex.svg";
import Guarantee from "../../../assets/guarantee.png";

export function MainDesktop() {
  return (
    <Container>
      <div className="main">
        <div className="section-left">
          <div className="section-img">
            <img src={ProductImage} alt="" />
          </div>
          <div className="section-review">
            <div className="customer">
              <div className="customer-img">
                <img src={CustomerImg} alt="" />
              </div>
              <div className="customer-details">
                <div className="stars">
                  <img src={Stars} alt="" />
                </div>
                <div className="customer-name">
                  <p>Ken T.</p>
                  <img src={Verify} alt="" />
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
            <div className="review">
              <p>
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </p>
            </div>
          </div>
        </div>
        <div className="section-right">
          <div className="product-title">
            <h1>
              <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
              only <span>$14 each</span> ($84.00 total!)
            </h1>
          </div>
          <div className="product-details">
            <div className="product-img">
              <img src={ProductImgSmall} alt="" />
            </div>
            <div className="product-content">
              <div className="product-name">
                <h2>Clarifion Air Ionizer</h2>
                <div className="product-price">
                  <p>$180</p>
                  <span>$84</span>
                </div>
              </div>
              <div className="product-stars">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <div className="product-stock">
                <img src={SelectedCircle} alt="" />
                <p>12 left in Stock</p>
              </div>
              <div className="product-resume">
                <p>
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
          </div>
          <div className="product-informations">
            <div className="product-informaions-section">
              <img src={CheckBlue} alt="" />
              <p>
                Negative Ion Technology may <strong>help with allergens</strong>
              </p>
            </div>
            <div className="product-informaions-section">
              <img src={CheckBlue} alt="" />
              <p>
                Designed for <strong>air rejuvenation</strong>
              </p>
            </div>
            <div className="product-informaions-section">
              <img src={CheckBlue} alt="" />
              <p>
                <strong>Perfect for every room</strong> in all types of places.
              </p>
            </div>
          </div>
          <div className="product-discount">
            <img src={DiscountPercentage} alt="" />
            <p>
              Save <span>53%</span> and get <span>6 extra Clarifision</span> for
              only <span>$14 Each</span>.
            </p>
          </div>
          <div className="order-buy">
            <div className="button-buy">
              <button>
                <p>YES - CLAIM MY DISCOUNT</p>
                <img src={ArrowLine} alt="" />
              </button>
              <div className="order-benefits">
                <div className="order-benefits-item">
                  <p>Free Shipping</p>
                </div>
                <div className="order-benefits-item">
                  <div className="order-benefits-item-ssl">
                    <img src={Lock} alt="" />
                    <p>Secure 256-bit SSL encryption.</p>
                  </div>
                </div>
                <div className="order-benefits-item">
                  <div className="order-benefits-item-cards">
                    <img src={Visa} alt="" />
                    <img src={ShopPay} alt="" />
                    <img src={PayPal} alt="" />
                    <img src={MasterCard} alt="" />
                    <img src={GPay} alt="" />
                    <img src={ApplePay} alt="" />
                    <img src={Amex} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="refuse">
              <p>NO THANKS, I DON&apos;T WANT THIS</p>
            </div>
          </div>
          <div className="product-guarantee">
            <img src={Guarantee} alt="" />
            <p>
              If you are not completely thrilled with your Clarifion - We have a{" "}
              <strong>30 day satisfaction guarantee</strong>. Please refer to
              our return policy at the bottom of the page for more details.
              Happy Shopping!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
