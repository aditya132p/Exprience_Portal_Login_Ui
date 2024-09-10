import React from 'react'

function Input() {
  return (
    <input type={props.type} className={props.style} required placeholder={props.placeholder} />
  )
}

export default Input