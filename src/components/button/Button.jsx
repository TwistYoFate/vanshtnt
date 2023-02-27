import React from 'react'
import './Button.scss'

function Button(props) {
  return(
    <button onClick={(e)=>{props.clickHandler(e)}} >
        Explore
    </button>
  )
}
export default Button