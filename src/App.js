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
      showHelloWorld: false
    }
  }

  handleClick = () => {
    const { showHelloWorld } = this.state
    this.setState({
      showHelloWorld: !showHelloWorld
    })
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
    const { showHelloWorld } = this.state;
    return (
      <>
      <Button 
        onClick={this.handleClick} 
        ariaProps={{
          ariaLabel: 'LABEL',
          ariaPressed: showHelloWorld ? true : false,
          ariaExpanded: 'EXPANDED'
        }}
      >
        Click me!
      </Button>
      {this.maybeRenderHelloWorld()}
      testing
        </>
    );
  }
}

export default App;

//Click button to call API for a random Frasier image
//topText/bottomText inputs handle text for meme
//be able to save/download/share meme