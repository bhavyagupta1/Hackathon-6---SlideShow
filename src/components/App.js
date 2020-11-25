import React, { Component, useState } from "react";

import slides from "../data";
import '../styles/App.css';

const App = (props) => {

  const [itemTitle, setItemTitle] = useState(props.slides[0].title);
  const [itemText, setItemText] = useState(props.slides[0].text);
  const [idx, setIdx] = useState(0);

  const createSlide = () => {
    
    if (idx < slides.length) {
     
      setItemTitle(props.slides[idx+1].title);
      setItemText(props.slides[idx+1].text);
      setIdx(idx+1);
      
    }
  }
  const prevSlide = () => {

    if(idx >= 0){
    setItemTitle(props.slides[idx - 1].title);
    setItemText(props.slides[idx - 1].text);
    setIdx(idx-1);
    }

  }
  const resetFirstSlide = () => {
    setItemTitle(props.slides[0].title)
    setItemText(props.slides[0].text)
    setIdx(0);
  }
  return (
    <div>
      {/* { 
        props.slides[0].title
      }{
        props.slides[0].text
      } */}
      <NewSlide Title={itemTitle} Text={itemText}></NewSlide>


      <button data-testid="button-restart"
        onClick={resetFirstSlide}
        >
        Restart
    </button>
      <button data-testid="button-prev"
        onClick={prevSlide}
        disabled={idx==0}>
        Prev
    </button>
      <button data-testid="button-next"
        onClick={createSlide}
        disabled={idx==slides.length-1}>
        Next
    </button>
    </div>
  )
}
function NewSlide(props) {
  return (
    <div>
      <h1>{props.Title}</h1>
      <h1 >{props.Text}</h1>
    </div>
  )
}

export default App;
