import React from "react";
import StarRatings from "react-star-ratings";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const roundedRating = Math.round(rating * 10) / 10;

  const handleRatingChange = (newRating: number) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <StarRatings
      rating={roundedRating}
      starRatedColor="#FFD700"
      starEmptyColor="#DDDDDD"
      starHoverColor="#FFD700"
      starDimension="18px"
      starSpacing="2px"
      numberOfStars={5}
      name="rating"
      changeRating={
      onRatingChange ? (newRating) => onRatingChange(newRating) : undefined
      }
    />
  );
};

export default StarRating;
