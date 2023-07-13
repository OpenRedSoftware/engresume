import "../../pages/index.css";
import React, { useEffect, useState } from "react";
import "./styles.css";

function ControlledCarousel() {
  const [activeSlide, setActiveSlide] = useState(1);

  const reviews = [
    {
      name: "4 YOE Senior Mobile Dev",
      quote:
        "[...] This was super helpful. I've been having a tough time getting interviews so I appreciate you taking the time to leave detailed feedback.",
    },
    {
      name: "0 YOE Intern Web Dev",
      quote:
        "Thank you for your valuable insights. I truly appreciate the dedicated time and effort you have invested in assisting me.",
    },
    {
      name: "2 YOE Backend Dev; Landed Amazon SDE I",
      quote: "Not only thorough but also practical [...]. I can't thank you enough",
    }
  ];

  useEffect(() => {
    // This variable prevents race condition
    const cycleReviews = () => {
      setActiveSlide(activeSlide === 3 ? 1 : activeSlide + 1);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 6000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, [activeSlide]);

  return (
    <div className="App">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
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
          <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
            onClick={() => setActiveSlide(1)}
            role="button"
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
            onClick={() => setActiveSlide(2)}
            role="button"
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
            onClick={() => setActiveSlide(3)}
            role="button"
          />
        </li>
      </ul>
    </div>
  );
}

export default ControlledCarousel;
