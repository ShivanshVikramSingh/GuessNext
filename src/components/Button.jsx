import React from 'react'
import style from '../index.css'
const Button = (props) => {
    const{OnClick, text, iswhite }=props;
  return (
    <button onClick={OnClick} className={iswhite? "whitebtn": "blackbtn"}>{text}</button>
  )
}

export default Button