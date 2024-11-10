import React from 'react'
import minusIcon from '../../../assets/minus.svg'

function MinusIcon ({ onClick }){
  return (
    <img src={minusIcon} alt="minusIcon" onClick={onClick}/>
  )
}

export default MinusIcon