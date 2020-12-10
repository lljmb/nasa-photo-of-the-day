import React, { useState, useEffect } from "react";
import axios from 'axios';
import Photo from './Photo';
import "./App.css";

function App() {
  const [ photo, setPhoto ] = useState([])

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-10-26')
    .then(res => {
      setPhoto(res.data)
    })
    .catch(err => {
      console.log('error', err)
    })
  }, [])

  return (
    <>
    <div className="App">
      <Photo photo={photo} />
    </div>
    </>
  );
}

export default App;
