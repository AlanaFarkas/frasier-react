import React, { Component } from 'react';
import Hero from './Hero';
import styled from 'styled-components';
// import GridContainer from './GridContainer';
import GridItem from './GridItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: null
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  handleClick = (obj) => {
    this.setState({
      active: obj
    })
  }

  render() {
    const gridContents = this.state.data.map(item =>     
      <GridItem active={this.state.active} handleClick={this.handleClick} key={item.id} item={item}/>      
    );
    return (
      <AppContainerDiv>
        <Hero headline="Because I love Frasier" />
        {/* {this.state.active == null ? console.log("null") : console.log(this.state.active.item.id)} */}
        {gridContents}
      </AppContainerDiv>

    );
  }
}

export default App;

const AppContainerDiv = styled.div`
  margin: 35px
`;




