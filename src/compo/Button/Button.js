import React from 'react'
import './Button.css'

const Button = (props) => {

    const mystyle = {
        color: props.cl,
        backgroundColor: props.bg,
        padding:props.padding,
        fontFamily: "Arial"
  };

  return (
    <button
      onclick={props.click}
      className="btn" style={mystyle}>
      {props.title}
    </button>
  );
}

export default Button
