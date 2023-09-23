import { Container } from "./styles";
import Logo from "../../assets/logo.png";
import Frame1 from "../../assets/frame1.svg";
import Frame2 from "../../assets/frame2.svg";

export function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="items">
        <img src={Frame1} alt="" />
        <img src={Frame2} alt="" />
      </div>
    </Container>
  );
}