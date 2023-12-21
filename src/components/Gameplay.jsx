// import React from 'react';
// import Button from './Button';
// import '../index.css';
// import { useState } from 'react';


// const Gameplay = ({ toggle, txt }) => {
//   const [selno, setno] = useState();
//   function triggerno({ i }) {
//     setno(i);
//   }
//   const [dice, rolldice] = useState(1);
//   function showdice() {
//     var i = (Math.ceil(Math.random() * 6));
//     rolldice(i);
//   }
//   let show = txt ? "Hide" : "Show"
//   return (
//     <main>
//       <div className='head'>
//         <div className="score">
//           <b>0</b>
//           <p>Total Score</p>
//         </div>
//         <div className="setno">
//           <div className="btns">
//             <button>1</button>
//             <button>2</button>
//             <button>3</button>
//             <button>4</button>
//             <button>5</button>
//             <button>6</button>
//           </div>
//           <p><b>Select Number</b></p>
//         </div>
//       </div>
//       <div className="hero">
//         <button onClick={doo} style={{ cursor: 'pointer', padding: 0, border: 'none', background: 'transparent' }}><img style={{ position: 'relative', zIndex: -1 }} src={"./dice/dice_" + dice + ".png"} alt="" s /></button>
//         <p>Click on Dice to roll</p>
//         <Button text="Reset Score" iswhite={false}></Button>


//         <Button OnClick={toggle} text={show + " Rules"} iswhite={true} />

//       </div>

//     </main>
//   )
// }

// export default Gameplay

import React, { useState } from 'react';
import Button from './Button';
import '../index.css';

const Gameplay = ({ toggle, txt }) => {
  const[text,torf]=useState("Select Number");
  const [score,setScore]=useState(0);
  const [dice, rolldice] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);

  function showdice() {
    if(selectedButton){
      torf(selectedButton+" is selected")
    var i = Math.ceil(Math.random() * 6);
    rolldice(i);
    if (i===selectedButton) {
      setScore(score+10);
    }
    else setScore(score-2);
  }
  else{
      torf("You have not selected any number")
  }
  }
   const reset=()=>{
    torf("Select Number");
    setScore(0);
    setSelectedButton(null);
    rolldice(1);
   }
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    torf(buttonIndex+" is selected")
    // Add any additional logic you need when a button is selected
  };

  let show = txt ? 'Hide' : 'Show';

  return (
    <main>
    <div className='head'>
    <div className="score">
           <b>{score}</b>
           <p>Total Score</p>
         </div>
      <div className="setno">
        <div className="btns">
          {[1, 2, 3, 4, 5, 6].map((buttonIndex) => (
            <button
              key={buttonIndex}
              onClick={() => handleButtonClick(buttonIndex)}
              style={{
                backgroundColor: selectedButton === buttonIndex ? 'black' : 'white',
                color: selectedButton === buttonIndex ? 'white' : 'black',
              }}
            >
              {buttonIndex}
            </button>
          ))}
        </div>
        <p>
            <b style={{color: text=="You have not selected any number"?"red":"black"}}>{text}</b>
          </p>
      </div>
    </div>
    <div className="hero">
      <button
        onClick={showdice}
        style={{ cursor: 'pointer', padding: 0, border: 'none', background: 'transparent' }}
      >
        <img style={{ position: 'relative', zIndex: -1 }} src={`./dice/dice_${dice}.png`} alt="" />
      </button>
      <p>Click on Dice to roll</p>
      <Button OnClick={reset} text="Reset Score" iswhite={false}></Button>
      <Button OnClick={toggle} text={show + ' Rules'} iswhite={true} />
    </div>
  </main>
);
};

export default Gameplay;

