import React, { useState } from "react";
import "./style.css";

const RandomThoughtGenerator = () => {
  const [randomThought, setRandomThought] = useState(``);

  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  const generateRandomThought = async () => {
    const response = await fetch(
      "https://type.fit/api/quotes"
    ).then((response) => response.json());
    const result = getRandomItem(response);
    setRandomThought(result.text);
  };
  return (
    <div className="container">
      <h1 className="title">Thought Generator</h1>
      <button className="button" onClick={() => generateRandomThought()}>
        {""}
        Generate Thought
      </button>
      <p className="data">{randomThought}</p>
    </div>
  );
};

export default RandomThoughtGenerator;
