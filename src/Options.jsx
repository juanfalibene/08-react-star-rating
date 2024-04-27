import React from "react";

const Options = ({
  iconSize,
  icon,
  color,
  count,
  onIconChange,
  onIconSizeChange,
  onColorChange,
  onCountChange,
}) => {
  return (
    <form>
      <label>
        Icon:
        <input
          type='text'
          value={icon}
          maxLength='1'
          size='2'
          onChange={onIconChange}
        />
      </label>
      <label>
        Icon Size:
        <input
          type='range'
          value={iconSize}
          onChange={onIconSizeChange}
          min='50'
          max='100'
          step='10'
        />
      </label>
      <label>
        Count:
        <input
          type='range'
          value={count}
          onChange={onCountChange}
          min='5'
          max='10'
          step='1'
        />
      </label>
      <label>
        Color:
        <input type='color' value={color} onChange={onColorChange} />
      </label>
    </form>
  );
};

export default Options;
