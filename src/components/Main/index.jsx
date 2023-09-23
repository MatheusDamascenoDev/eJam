import { Container } from "./styles";
import { useEffect, useState } from "react";
import { MainDesktop } from "./Desktop";
import { MainMobile } from "./Mobile";

export function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <Container>
      {windowWidth >= 768 ? <MainDesktop /> : <MainMobile />}
    </Container>
  );
}
