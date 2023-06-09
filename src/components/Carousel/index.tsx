import React, { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { run as runHolder } from "holderjs/holder";
import "../../pages/index.css";

const carouselHeight = "150";
const carouselColor = "f8f8fa";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    runHolder("image-class-name");
  });

  return (
    <div className="shadow">
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`holder.js/100x${carouselHeight}?text=%20&bg=${carouselColor}`}
            alt="First slide"
          />
          <Carousel.Caption>
            "Thank you for your valuable insights. I truly appreciate the
            dedicated time and effort you have invested in assisting me."
            <div className="text-muted pt-1">0 YOE Intern Web Dev</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`holder.js/100x${carouselHeight}?text=%20&bg=${carouselColor}`}
            alt="Second slide"
          />

          <Carousel.Caption>
            "[...] This was super helpful. I've been having a tough time getting
            interviews so I appreciate you taking the time to leave detailed
            feedback."
            <div className="text-muted pt-1">4 YOE Senior Mobile Dev</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`holder.js/100x${carouselHeight}?text=%20&bg=${carouselColor}`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="middle-div">
              "For 50$, can you review it again? 😁"
              <div className="text-muted pt-1">2 YOE Backend Dev; Later landed Amazon SDE I</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
