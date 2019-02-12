import React from 'react'

const Button = (props) => (
  <button
    className={"btn btn-" + props.btnType}
    onClick={props.onClick}
  >{props.children}</button>
)

export default Button;