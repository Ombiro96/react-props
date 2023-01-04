import data from "./memesData";
import React, { useState } from "react";
export default function Meme(props) {
  const [testNumber, setResult] = useState(0);
  const [urlNumber, setUrlNumber]=useState("");
  function generateMemes() {
    const meme = document.querySelector(".headerMeme");
    // meme.textContent = "Clicked";
    const memesArray = data;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    meme.textContent = randomNumber;
    url = memesArray[randomNumber].url;
    meme.textContent = randomNumber + " " + url;
    setUrlNumber(url)
  }
  function handleClick() {
    setResult(0);
  }
  function addNumber() {
    setResult(function (oldValue) {
      //this is best practice when needing to use previous state to determine new state
      return oldValue + 1;
    });
    // testNumber++ is wrong because you never want to change the state
    console.log(testNumber);
  }
  function minusNumber() {
    setResult(testNumber - 1);
    console.log(testNumber);
  }
  let url = "";
  return (
    <div className="meme">
      <h1 className="headerMeme"></h1>
      <div className="form">
        <input type="text" className="form-input" placeholder="top text" />
        <input type="text" className="form-input" placeholder="bottom text" />
        <button className="form-button" onClick={generateMemes}>
          Get a new Meme Image
        </button>
      </div>
      <img src={urlNumber}  />



      {/* used in practicing state */}
      <div className="add-minus">
        <button className="minus" onClick={minusNumber}>
          Minus
        </button>
        <div className="number">{testNumber}</div>
        <button className="add" onClick={addNumber}>
          Add
        </button>
      </div>

      <button className="state" onClick={handleClick}>
        Reset
      </button>
    </div>
  );
}
