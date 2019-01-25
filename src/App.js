import React, { Component } from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GridContainer from './GridContainer';

const testArray = [{source: '1', source: 2}];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: false
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=25")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }


 
  render() {
    return (
      <AppContainerDiv>
        <Hero headline="Because I love Frasier" />
        <GridContainer gridItems={this.state.data} />
      </AppContainerDiv>

    );
  }
}

export default App;

const AppContainerDiv = styled.div`
  margin: 20px;
`
