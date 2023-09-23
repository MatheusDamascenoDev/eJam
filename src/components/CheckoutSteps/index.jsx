import { Container } from "./styles";
import Check from "../../assets/check.svg";

export function CheckoutSteps() {
  return (
    <Container>
      <div className="steps">
        <div className="step">
          <div className="circle-check">
            <img src={Check} alt="" />
          </div>
          <p><span>Step 1 :</span> Cart Review</p>
        </div>
        <div className="step">
          <div className="circle-check">
            <img src={Check} alt="" />
          </div>
          <p><span>Step 2 :</span> Checkout</p>
        </div>
        <div className="step">
          <div className="circle-select">
            <p>3</p>
          </div>
          <p className="selected"><span>Step 3 :</span> Special Offer</p>
        </div>
        <div className="step">
          <div className="circle">
            <p>4</p>
          </div>
          <p><span>Step 4 :</span> Confirmation</p>
        </div>
      </div>
    </Container>
  );
}
