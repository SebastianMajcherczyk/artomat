import React from "react";
import "./Reviews.css"; // Styl w osobnym pliku

const reviews = [
  {
    author: "Anna K.",
    text: "Jestem zachwycona efektem! Druk na ścianie wygląda jak ręczne dzieło sztuki. Polecam Loftprint każdemu!",
    rating: 5,
  },
  {
    author: "Michał P.",
    text: "Profesjonalne podejście i szybka realizacja. Efekt przerósł moje oczekiwania!",
    rating: 5,
  },
  {
    author: "Magda S.",
    text: "Nadruk wygląda genialnie, nawet na nierównej powierzchni! Pełna satysfakcja.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h2>Opinie naszych klientów</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">„{review.text}”</p>
            <div className="review-author">— {review.author}</div>
            <div className="review-rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
