import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components'

function App() {
  const [photo, setPhoto] = useState([])
  const [descript, setDescript] = useState([])
  const [titl, setTitle] = useState([])

  useEffect(() => { 
    const fetchPhoto = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-11-05')
    .then( (res) => {
      setPhoto(res.data.url);
      console.log('hey hey hey');

      setDescript(res.data.explanation);

      setTitle(res.data.title)
    })
    .catch( err => {
      console.log(err, 'it probably timed out');
    })
  }
    fetchPhoto();
  }, [])  

  return (
    <StyledNASA className="App">
      <h1>NASA Photo of the Day</h1>
      <h2>{titl}</h2>
      <p>
        <img src={photo}></img></p>
      <p>{descript}</p>
      <button><span role="img" aria-label='go!'>🚀!</span></button>
    </StyledNASA>
  );
}

const StyledNASA = styled.div`
opacity: 0.5;

display: flex wrap;
justify-content: center;
text-align: center;

button {
  &:hover{
    transform: scale(2.0);
    transition: transform 0.5s ease-in-out;
  }
  transition: transform 0.5s ease-in-out;
}

@media(max-width: 550px) {
  width: 100%auto;
}
`

export default App;
