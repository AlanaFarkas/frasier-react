import React, { Component, useState } from 'react';
import styled from 'styled-components';
// import { Timer } from './Timer';
import { FancyButton } from './Button';

class App extends Component {
    constructor(props) {
      super(props)
  
      // Create the ref
      this.textInput = React.createRef();
    }

    handleClick = (e) => {
      e.preventDefault();
      this.textInput.current.focus();
      console.log(this.textInput.current.value)
    }
  
    render() {
      return (
        <>
          <input type="text" ref={this.textInput} />
          <FancyButton onClick={this.handleClick}>Submit</FancyButton>
        </>
      )
    }
  }

export default App;



