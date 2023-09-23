import { Container } from "./styles";
import Lock from "../../assets/lock1.svg";

export function Footer() {
  return (
    <Container>
      <div className="sections">
        <div className="first-section">
          <div><p>Copyright (c) 2023</p></div>
          <div><p>clarifionsupport@clarifion.com</p></div>
        </div>
        <div className="second-section">
          <img src={Lock} alt="" />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    </Container>
  )
}