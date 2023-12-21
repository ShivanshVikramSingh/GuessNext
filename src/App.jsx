import React, { useState } from 'react'
import './index.css';
import LandingPage from './components/LandingPage';
import Gameplay from './components/Gameplay';
import Rule from './components/Rule';

const App = () => {
    const [isStarted,setStarted]=useState(false);
    const [showrule, setrule]=useState(false);
    const toggleStarted=()=>{
        setStarted(!isStarted);
    }
    const toggleShowrule=()=>{
        console.log("Clicked");
        setrule(!showrule);
    }
   return( 
    <>{isStarted? <Gameplay toggle={toggleShowrule} txt={showrule}/>:<LandingPage toggle={toggleStarted}/>}
    {showrule? <Rule />:""}
    </>
    
   )
}

export default App