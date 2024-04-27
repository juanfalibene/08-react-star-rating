import { useState } from "react";

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "⭐";
const DEFAULT_UNSELECTED_COLOR = "gray";
const DEFAULT_COLOR = "yellow";

const Stars = ({ count, defaultRating, icon, color, iconSize }) => {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(count || DEFAULT_COUNT).fill(icon);

  return <div>Stars</div>;
};

export default Stars;
