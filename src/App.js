import React, { Component } from 'react';
import Hero from './Hero';
import styled from 'styled-components';
import GridItem from './GridItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      active: {},
      visible: false
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  handleMouseEnter = (obj) => {
    this.setState({
      active: obj.item.id,
      visible: true
    })
  }

  handleMouseOut = () => {
    this.setState({
      active: null,
      visible: false
    })
  }

  render() {

    const gridContents = this.state.data.map(item => {
      return (
        <GridItem 
          item={item}
          key={item.id} 
          handleMouseEnter={this.handleMouseEnter} 
          handleMouseOut={this.handleMouseOut}
        >
            <img 
              title={item.title} 
              alt={item.title} 
              src={item.images.fixed_width.url} 
            />
          {item.id === this.state.active ? <Title>{item.title}</Title> : null}
        </GridItem> 
      )  
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

const Title = styled.div`
  max-width: 200px;
`;
