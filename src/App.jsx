import { useState } from "react";
import reviews from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const randomReview = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = index + 1;
    }
    const newIndex = random % reviews.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button
            type="button"
            onClick={() => prevPerson()}
            className="prev-btn"
          >
            <FaChevronCircleLeft />
          </button>
          <button
            type="button"
            onClick={() => nextPerson()}
            className="next-btn"
          >
            <FaChevronCircleRight />
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            randomReview();
          }}
        >
          Randomize
        </button>
      </article>
    </main>
  );
};
export default App;
