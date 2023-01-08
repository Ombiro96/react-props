import data from "./memesData";
import React, { useState } from "react";
export default function Meme() {
  const [urlNumber, setUrlNumber] = useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg"
    }
  );

  const[allMemeImages, setAllMemeImages]=useState(data)

  function generateMemes() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    url = allMemeImages[randomNumber].url;
    name = allMemeImages[randomNumber].name;
    console.log(url)
    setUrlNumber(prevState=>{
      return{...prevState,
        randomImage: url
      }})
  }
  let url = "";
  let name= "";
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
      <h1 className="meme-header" style={{margin: "20px 0"}}></h1>
      <img src={urlNumber.randomImage} />
    </div>
  );
}
