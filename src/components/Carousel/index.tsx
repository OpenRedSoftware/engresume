import React, { useEffect, useState } from "react";
import "./styles.css";

function ControlledCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    {
      name: "4 YOE",
      quote:
        "[...] This was super helpful. I've been having a tough time getting interviews so I appreciate you taking the time to leave detailed feedback.",
    },
    {
      name: "0 YOE",
      quote:
        "Thank you for your valuable insights. I truly appreciate the dedicated time and effort you have invested in assisting me.",
    },
    {
      name: "2 YOE",
      quote: "Not only thorough but also practical [...]. I can't thank you enough",
    },
    {
      name: "15 YOE",
      quote: "Wow. [...] Wish I found this sooner"
    }
  ];

  useEffect(() => {
    const cycleReviews = () => {
      setActiveSlide(activeSlide === reviews.length - 1 ? 0 : activeSlide + 1);
    };
    const intervalId = setInterval(cycleReviews, 6000);
    return () => clearInterval(intervalId);
  }, [activeSlide, reviews.length]);

  return (
    <div className="App">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { name, quote } = review;
          return (
            <li
              className={`carousel__item
                ${index === activeSlide ? " active" : ""}
                ${index < activeSlide ? " left" : ""}
                ${index > activeSlide ? " right" : ""}`}
              key={index}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{name}</span>
                </cite>
                <p>"{quote}"</p>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`carousel__dot${activeSlide === index ? " active" : ""}`}
              onClick={() => setActiveSlide(index)}
              role="button"
              tabIndex={0}
              aria-label={`Slide ${index + 1}`}
              aria-pressed={activeSlide === index ? "true" : "false"}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default ControlledCarousel;
