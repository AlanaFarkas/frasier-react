import React, { Component } from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GridContainer from './GridContainer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: {}
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  handleClick = (obj) => {
    console.log("clicked" + obj);
    this.setState({
      active: obj
    })
  }

  //each child component has the same state but when the state active: true, then show the clicked child components data (title maybe?)

  render() {
    return (
      <AppContainerDiv>
        <Hero headline="Because I love Frasier" />
        <GridContainer handleClick={this.handleClick} active={this.state.active} data={this.state.data} />
      </AppContainerDiv>

    );
  }
}

export default App;

const AppContainerDiv = styled.div`
  margin: 35px
`;

//Because I love Frasier as title card with a timeout on componentDidMount before fading to the tile gallery?




