import React, { Component, useState } from 'react';
import styled from 'styled-components';
// import { Timer } from './Timer';
import { Button } from './Button';

const App = () => {

  const [isTrue, setBool] = useState(true)

  const handleButtonClick = () => {
    // console.log('testing')
    setBool(!isTrue)
  }
  
  const maybeRenderButton = () => {
    if(!isTrue) {
        return (
          null
        )
    }    
    return <Button />
  }

    return (
      <>
      <button onClick={handleButtonClick}>Click here</button>
      {maybeRenderButton()}
      </>
    )  
}


export default App;



