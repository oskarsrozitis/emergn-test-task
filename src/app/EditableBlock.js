import ReactDOM from 'react-dom'
import React, { Component, useState } from "react"

// Import Styles & scripts
import main from "../styles/main.scss";
import profile__img from '../images/profile_image@2x.jpg'

import Profile from './profile'
import Header from './header'

class EditableBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({isInEditMode: false, value: this.props.defaultValue})
  }
  
  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    })
  }

  renderEditView = () => {
    return <div className="editable">
      <input 
      type="text"
      defaultValue={this.state.value}
      ref="theTextInput"
      />
      <div class="controls">
        <button className="cancel formBtn" onClick={this.changeEditMode}>&#x2715;</button>
        <button className="approve formBtn" onClick={this.updateComponentValue}>&#10003;</button>
        </div>
      </div>
  }

  renderDefaultView = () => {
    return  <div onClick={this.changeEditMode}>
              {this.state.value}
            </div>   
  }

  render() {
    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView()
  }
}

export default EditableBlock