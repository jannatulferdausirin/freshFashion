
import React from 'react'

const button = ({text,className}) => {
  return (
    <button className={`${className}`}>
     {text}
    </button>
  )
}

export default button
