import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: {},
      visible: false,
      showHelloWorld: false,
      testString: 'testing 123'
    }
  }

  handleClick = () => {
    // const { showHelloWorld } = this.state
  this.setState((prevState) => ({
    showHelloWorld: !prevState.showHelloWorld
  }));
  }



  maybeRenderHelloWorld = () => {
    const { showHelloWorld } = this.state
    if( showHelloWorld ) {
      return (
        <h1>Hello World</h1>
      )
    }
  }

  // componentDidMount() {
  //   fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
  //     .then(response => response.json())
  //     .then(data => this.setState({ data: data.data }));
  // }

  render() {
    const buttonText = "Click here to learn more"
    const { showHelloWorld, testString } = this.state;
    return (
      <>
      <Button 
        onClick={this.handleClick} 
        ariaProps={{
          ariaLabel: buttonText,
          ariaPressed: showHelloWorld ? true : false,
          ariaExpanded: 'EXPANDED'
        }}
      >
        {buttonText}
      </Button>
      {this.maybeRenderHelloWorld()}
        </>
    );
  }
}

export default App;

//Click button to call API for a random Frasier image
//topText/bottomText inputs handle text for meme
//be able to save/download/share meme