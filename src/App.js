import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤒": "Face with Thermometer",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Face with Crossed-Out Eyes",
  "😵‍": "Face with Spiral Eyes",
  "🤯": "Exploding Head"
};
var emojiWeKnow = Object.keys(emojiDictionary);

// var headingText = "inside out";
// var color = "blue";

// var username = prompt("Give me your name");

// var username = "Aditya";

// var likeCounter = 0;
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    // console.log(meaning)
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  //  const [userInput,setUserInput] = useState("")

  //   function inputChangeHandler(event) {
  //     console.log(event.target.value);
  //     setUserInput(event.target.value);

  // const [likeCounter, setLikeCounter] = useState(0);
  // function likeClickHandler() {
  // var newLikeCountervalue = likeCounter + 1;
  // likeCounter = likeCounter + 1; //processing
  // console.log("clicked!", likeCounter); //output
  // setLikeCounter(likeCounter + 1);

  return (
    <div className="App">
      <h1>Emoji interpreter!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.8rem", padding: "0.3rem" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
