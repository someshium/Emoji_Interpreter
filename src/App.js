import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const dictionary = {
    "😀": "Grinning Face",
    "😁": "Beaming Face with Smiling Eyes",
    "😂": "face with Tears of Joy",
    "😎": "smiling Face with Sunglasses"
  };
  var emojisWeKnow = Object.keys(dictionary);
  var [inputValue, setValue] = useState("");

  function updateFunction(event) {
    var key = event.target.value;
    var meaning = dictionary[key];

    if (meaning === undefined) {
      setValue("No Idea 😁😅");
    } else {
      setValue(meaning);
    }
  }

  function onClickHandler(emojis) {
    var newmeaning = dictionary[emojis];
    setValue(newmeaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={updateFunction}></input>
      <div className="output">{inputValue}</div>
      <h2>Emojis We Know</h2>

      {emojisWeKnow.map(function (emojis) {
        return (
          <span
            key={emojis}
            onClick={() => onClickHandler(emojis)}
            style={{ padding: "1rem", fontSize: "2rem" }}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
