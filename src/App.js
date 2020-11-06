import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from 'styled-components'
import Header from './styles/Header.less'
import Body from './styles/Body.less'

function App() {
  const [photo, setPhoto] = useState([])

  useEffect(() => { 
    const fetchPhoto = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-11-05')
    .then( (res) => {
      setPhoto(res.data.url);
      console.log('hey hey hey');
    })
    .catch( err => {
      debugger;
    })
  }
    fetchPhoto();
  }, [])  

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <p>
        <img src={photo}></img>
       <button><span role="img" aria-label='go!'>🚀!</span></button>
      </p>
    </div>
  );
}

const StyledNASA = styled.div`
opacity: 0;

width: 60%;
display: flex;
justify-content: space-between;

button {
  color: ${(props) => props.theme.tertiaryColor};
  &:hover{
    transform: scale(1.3);
    transition: transform 0.5s ease-in-out;
  }
  transition: transform 0.5s ease-in-out;
}

@media(max-width: 550px) {
  width: 100%auto;
}

&:hover {
  color: ${(props) => props.theme.secondaryColor};
  background-color: lightcoral;
  transition: all 0.2s ease-in-out;
}
transition: all 0.2s ease-in-out;
`

export default App;
