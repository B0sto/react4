import React from 'react'
import SneakerLogo from '../../atoms/sneakerLogo/sneakerLogo'
import CartIcon from '../../atoms/cartIcon/cartIcon'
import HeaderElement from '../../atoms/headerElement/headerElement'
import Avatar from '../../atoms/avatar/avatar'
import '../../../App.css'

const PageHeader = () => {
  return (
    <div className='header'>
      <div className='header_container'>
        <div className='logo_container'>
            <SneakerLogo/>
        </div>

        <div className='header_container'>
            <HeaderElement name="Collections"/>
            <HeaderElement name="Men"/>
            <HeaderElement name="Women"/>
            <HeaderElement name="About"/>
            <HeaderElement name="Contact"/>
        </div>

      </div>

        <div className='icon_container'>
            <CartIcon/>
            <Avatar/>
        </div>
    </div>
  )
}

export default PageHeader