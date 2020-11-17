import ReactDOM from 'react-dom'
import React, { Component, useState } from "react"

// import styles & scripts
import main from "../styles/main.scss"

import sample__code from '../images/code_sample@2x.jpg'

const Profile = () => {
    return (
        <div className="main">
        <section>
          <h3>Portfolio</h3>
          <p className="text-center">PHP, Ruby, Javascript</p>
          <ul>
            <li><strong>NavalPlan</strong>, PHP, Ruby</li>
            <li><strong>MyTime</strong>, Javascript</li>
            <li><strong>Formidable</strong>, PHP, Ruby</li>
            <li><strong>MyTime</strong>, Javascript</li>
            <li><strong>Monsoon</strong>, Actionscript</li>
          </ul>
        </section>
        <section>
          <h3>Experience</h3>
          <ul>
            <li><strong>PHP</strong>, 6 years</li>
            <li><strong>Ruby</strong>, 7 years</li>
            <li><strong>Javascript</strong>, 4 years</li>
            <li><strong>Actionscript</strong>, 3 years</li>
          </ul>
        </section>
        <section style={{ backgroundImage: `url(${sample__code})` }}>
          <h3 className="withBG">Sample code and algorithms</h3>
          
        </section>
        <section className="text-center extraPadding">
          <h3>Availability</h3>
          <span className="lead">Full-time</span>
          <hr />
          <strong>Preferred environment</strong>
          <p>Git, Github, vim, emacs, Jenkins, Mac OSX</p>
        </section>
        <section className="quote__block">
          <h3>The most amazing ...</h3>
          <blockquote>...Lorem ipsum dolar sit amet, consectetur adispisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore</blockquote>
          <footer className="author">Martin</footer>
        </section>
        <section className="quote__block">
          <h3>In clients I look for ...</h3>
          <blockquote>... Lorem ipsum dolar sit amet, consectetur adispisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore</blockquote>
          <footer className="author">Martin</footer>
        </section>
        <section>
          {/* This block stays empty */}
        </section>
        <section className="quote__block">
          <h3>Note</h3>
          <blockquote>... Lorem ipsum dolar sit amet, consectetur adispisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore</blockquote>
        </section>
      </div>
    )
}

export default Profile