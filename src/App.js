import React from 'react'
import myImage from '../public/p2.JPG'
import './App.css'

export const App = () => {
    return (<div>
        <img src={myImage} />
        <h1>Hi, This is from React</h1>
    </div>)
}

/*
HOW TO START THE PROJECT
To start the server => node server.js
for development enviroment => npm run devBuild
for production enviroment => npm run prodBuild
*/