import React, { Component } from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GridItem from './GridItem';

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

  handleMouseEnter = (obj) => {
    this.setState({
      active: obj.item.id
    })
  }

  render() {

    const gridContents = this.state.data.map(item => {
      if(item.id === this.state.active) {
        return <GridItem handleMouseEnter={this.handleMouseEnter} key={item.id} item={item}>      
          <img alt="" src={item.images.fixed_width.url} />
          <Title>{item.title}</Title>
        </GridItem>   
      } else {
          return <GridItem handleMouseEnter={this.handleMouseEnter} key={item.id} item={item}>      
          <img alt="" src={item.images.fixed_width.url} />
        </GridItem>   
      }
    });

    return (
      <AppContainerDiv>
        <Hero headline="Because I love Frasier" />
        <GridContainerDiv>
          {gridContents}
        </GridContainerDiv>        
      </AppContainerDiv>

    );
  }
}

export default App;

const AppContainerDiv = styled.div`
  margin: 35px
`;

const GridContainerDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.strong`
  
`;






