import { Container } from "./styles";
import CheckMark from "../../assets/checkmark.svg";
import Truck from "../../assets/truck.svg";
import Heart from "../../assets/heart.svg";
import SyncCheckMark from "../../assets/sync-checkmark.svg";
import { useEffect, useState } from "react";
import { Carousel } from "../Carousel";

export function TopHeader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const carouselItems = [
    {
      imageUrl: CheckMark,
      title: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      imageUrl: Truck,
      title: "Free delivery on orders over $40.00",
    },
    {
      imageUrl: Heart,
      title: "50.000+ HAPPY CUSTOMERS",
    },
    {
      imageUrl: SyncCheckMark,
      title: "100% Money Back Guarantee",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      {isMobile ? (
        <Carousel items={carouselItems} />
      ) : (
        <>
          <div className="section">
            <img src={CheckMark} alt="" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="section">
            <img src={Truck} alt="" />
            <p>Free delivery on orders over $40.00</p>
          </div>
          <div className="section">
            <img src={Heart} alt="" />
            <p>50.000+ HAPPY CUSTOMERS</p>
          </div>
          <div className="section">
            <img src={SyncCheckMark} alt="" />
            <p>100% Money Back Guarantee</p>
          </div>
        </>
      )}
    </Container>
  );
}
