import ReactDOM from 'react-dom'
import React, { Component, useState } from "react"
import EditableBlock from './EditableBlock'

import profile__img from '../images/profile_image@2x.jpg'
import sample__code from '../images/code_sample@2x.jpg'

// import styles & scripts
import main from "../styles/main.scss";

const Header = () => {
    
    return (
       <>
       <div className="grid">
            <div className="header">
                <div className="col">
                    <img src={profile__img} className="profile__img" />
                </div>
                
                <div className="col px-5 py-4">
                    <h1><EditableBlock defaultValue="John Smith" /></h1>
                    <p className="location__info"><EditableBlock defaultValue="Portland, Oregon, USA"/>  </p>
                    <p className="languages__info"><EditableBlock defaultValue="English"/>  </p>
                    <div className="skills">
                        <span className="strong">PHP</span><span className="strong">Ruby</span><span className="average">Javascript</span><span className="basic">Actionscript</span>
                    </div>
                    <a href="#">Add skills</a>
                </div>
            
                <div className="col">
                    <button onClick={() => window.print()} className="print my-5 text-uppercase">Print this page</button>
                </div>
            </div>
    </div>
        
       </>
    )
}

export default Header