// imports
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Photo(props) {
    const { photo } = props;

    return (
        <div className='Photo'>
            <span role="img" aria-label='go!'>🚀</span>!
            <h1>NASA Photo of the Day!</h1>
            <h3>Today is {photo.date}</h3>
            <img src={photo.url} alt="NASA POD"></img>
            <p>{photo.explanation}</p>
        </div>
    )
}