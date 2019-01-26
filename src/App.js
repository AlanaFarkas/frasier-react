import React, { Component } from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GridContainer from './GridContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: false
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  handleClick = () => {
    console.log("clicked");
  }

  render() {
    return (
      <AppContainerDiv>
        <Hero onClick={this.handleClick} headline="Because I love Frasier" />
        <GridContainer onClick={this.handleClick} active={this.state.active} gridItems={this.state.data} />
      </AppContainerDiv>

    );
  }
}

export default App;

const AppContainerDiv = styled.div`
  margin: 35px
`;

//Because I love Frasier as title card with a timeout on componentDidMount before fading to the tile gallery?




