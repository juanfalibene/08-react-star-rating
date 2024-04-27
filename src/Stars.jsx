import { useEffect, useState } from "react";

const DEFAULT_COUNT = 5;
// ★☆
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "gray";
const DEFAULT_COLOR = "yellow";

const Stars = ({ count, defaultRating, icon, color, iconSize }) => {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  useEffect(() => {
    const storedRating = localStorage.getItem("starRating");
    if (storedRating) {
      setRating(parseInt(storedRating));
    } else {
      setRating(defaultRating);
    }
  }, [defaultRating]);

  let stars = Array(count || DEFAULT_COUNT).fill(icon);

  const handleClick = (rating) => {
    setRating(rating);
    saveRatingLocal(rating);
  };

  const saveRatingLocal = (rating) => {
    localStorage.setItem("starRating", rating);
  };

  const resetRatingLocal = () => {
    localStorage.setItem("starRating", 0);
    localStorage.removeItem("starRating");
    setRating(0);
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
      <div>
        <button onClick={() => resetRatingLocal()}>RESET</button>
      </div>
    </div>
  );
};

export default Stars;
