import React from 'react'
import FirstImage from '../../atoms/FirstImage/FirstImage'
import SecondImage from '../../atoms/SecondImage/SecondImage'
import ThirdImage from '../../atoms/ThirdImage/ThirdImage'
import FourthImage from '../../atoms/FourthImage/FourthImage'
import MainImage from '../../atoms/MainImage/MainImage'
import '../../../App.css'

const ImagesComp = () => {
  return (
    <div className='imageContainer'>
        <div className='main_container'>
            <MainImage/>
        </div>

        <div>
            <div className='small_container'>
                <FirstImage/>
                <SecondImage/>
                <ThirdImage/>
                <FourthImage/>
            </div>
        </div>
    </div>
  )
}

export default ImagesComp