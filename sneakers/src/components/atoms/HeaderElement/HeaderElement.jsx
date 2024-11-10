import React from 'react'
import '../../../App.css'

function HeaderElement(props) {
  return (
    <p className='headerElement'>{props.name}</p>
  )
}

export default HeaderElement