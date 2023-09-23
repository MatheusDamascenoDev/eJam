import { useState } from "react";
import PropTypes from 'prop-types';
import { Container } from "./styles";
import LeftArrow from "../../assets/leftArrow.svg";
import RightArrow from "../../assets/rightArrow.svg";

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`, // Move os slides horizontalmente
  };

  return (
    <Container>
      <button className="carousel-button prev" onClick={prevSlide}>
        <img src={LeftArrow} alt="" />
      </button>
      <div className="carousel-content" style={slideStyle}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        <img src={RightArrow} alt="" />
      </button>
    </Container>
  );
}