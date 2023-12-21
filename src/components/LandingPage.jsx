import React from 'react'
import '../index.css';
import Button from './Button';
const LandingPage = ({toggle}) => {
  return (
    <div className="container">
        <div className='main1'>
        <div className="mainphoto1">
        <img src='dices 1.png'></img>
        </div>
        <div className="main1desc">
            <div className="text">DICE GAME</div>
            <div  style={{display:"flex",justifyContent:"end"}}>
              <Button OnClick={toggle} text="Play Now" iswhite={false}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LandingPage; 