import ReactDOM from 'react-dom'
import React, { Component, useState } from "react"

// import components
import Header from './header'
import Profile from './profile'

// import styles & scripts
import main from "../styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);