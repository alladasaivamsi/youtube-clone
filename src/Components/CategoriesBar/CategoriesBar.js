import React, { useState } from "react";
import "./_CategoriesBar.scss";

const keywords = [
  "All",
  "HTML",
  "CSS",
  "JavsScript",
  "React JS",
  "Angular JS",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm",
  "Cricket",
  "FootBall",
  "Gatsby",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (item) => {
    setActiveElement(item);
  };

  return (
    <div className="CategoriesBar">
      {keywords.map((item, index) => {
        return (
          <span
            onClick={() => handleClick(item)}
            key={index}
            className={activeElement === item ? "active" : ""}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesBar;
