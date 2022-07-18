// Code Keypad Component Here
import React from 'react';

function KeyPad (){
  function handleChange(event){
    return console.log('Entering password...');
  }
  return(
    <>
    <input type="password" onChange={handleChange}></input>
    </>
  )
}

export default KeyPad