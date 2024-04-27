import { useState } from "react";

const DEFAULT_COUNT = 5;
// ★☆
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "gray";
const DEFAULT_COLOR = "yellow";

const Stars = ({ count, defaultRating, icon, color, iconSize }) => {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(count || DEFAULT_COUNT).fill(icon);

  const handleClick = (rating) => {
    setRating(rating);
    localStorage.setItem("starRating", rating);
  };

  return (
    <div className='stars-container'>
      {stars.map((item, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);

        let itemColor = "";

        if (isActiveColor) {
          itemColor = color || DEFAULT_COLOR;
        } else {
          itemColor = DEFAULT_UNSELECTED_COLOR;
        }

        return (
          <div
            className='star'
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "1em",
              color: itemColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : DEFAULT_ICON}
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
