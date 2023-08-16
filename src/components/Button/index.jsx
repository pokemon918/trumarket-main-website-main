import React from 'react'

const Button = ({className, text, onHandleClick}) => {
  return (
    <><button className={`custom-btn ${className}`} onClick={onHandleClick}>{text}</button></>
  )
}

export default Button