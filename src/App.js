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

    state = {
      ButtonText: '',
    }

    handleClick = (e) => {
      e.preventDefault();
      this.textInput.current.focus();
      console.log(this.textInput.current.value)
      this.setState({ButtonText: this.textInput.current.value})
    }
  
    render() {
      const {ButtonText} = this.state;
      const buttonWords = ButtonText;
      return (
        <>
          <input type="text" ref={this.textInput} />
          <FancyButton onClick={this.handleClick}>{buttonWords}</FancyButton>
        </>
      )
    }
  }

export default App;



