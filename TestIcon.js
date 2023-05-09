import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TestIcon = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>
        {isPlaying ? (
          <ArrowDropDownIcon onClick={handleClick} />
        ) : (
          <ArrowDropUpIcon onClick={handleClick} />
        )}
      </h2>
    </div>
  );
};

export default TestIcon;
