import "../../pages/index.css";
import React, { useEffect, useState } from "react";
import "./styles.css";

function ControlledCarousel() {
  /*
            <div className="captionContent">
              "[...] This was super helpful. I've been having a tough time getting
              interviews so I appreciate you taking the time to leave detailed
              feedback."
              <div className="text-muted pt-1">4 YOE Senior Mobile Dev</div>
            </div>
            <div className="captionContent">
              "Thank you for your valuable insights. I truly appreciate the
              dedicated time and effort you have invested in assisting me."
              <div className="text-muted pt-1">0 YOE Intern Web Dev</div>
            </div>
            <div className="captionContent">
              "For 50$, can you review it again? 😁"
              <div className="text-muted pt-1">
                2 YOE Backend Dev; Later landed Amazon SDE I
              </div>
            </div>
            */

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
      name: "2 YOE Backend Dev; Later landed Amazon SDE I",
      quote:
        "For 50$, can you review it again? 😁",
    },
  ];

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 3) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 6000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

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
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
        </li>
      </ul>
    </div>
  );
}

export default ControlledCarousel;
