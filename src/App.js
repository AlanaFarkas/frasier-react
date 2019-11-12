import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: {},
      visible: false
    }
  }

  handleClick = () => {
      fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=1")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  // componentDidMount() {
  //   fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
  //     .then(response => response.json())
  //     .then(data => this.setState({ data: data.data }));
  // }

  render() {
    console.log(this.state)
    return (
      <Button onClick={this.handleClick}>Click me!</Button>

    );
  }
}

export default App;

//Click button to call API for a random Frasier image
//topText/bottomText inputs handle text for meme
//be able to save/download/share meme