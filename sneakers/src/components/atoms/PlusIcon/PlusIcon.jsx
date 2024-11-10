import React from 'react'
import plusIcon from '../../../assets/plus.svg'

function PlusIcon({ onClick}) {
  return (
    <img src={plusIcon} alt="plus" onClick={onClick}/>
  )
}

export default PlusIcon