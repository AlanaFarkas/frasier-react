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
      active: {}
    }
  }

  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/search?q=frasier_crane&api_key=Illt50sv9uZ34GhHzF5hOzJhx92NCh6H&limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data: data.data }));
  }

  handleClick = (obj) => {
    this.setState({
      active: obj.item.id
    })
  }

  render() {

    const gridContents = this.state.data.map(item => {
      if(item.id === this.state.active) {
        return <GridItem active={this.state.active} handleClick={this.handleClick} key={item.id} item={item}>      
          <strong>{item.title}</strong>
          <img alt="" src={item.images.fixed_width.url} />
        </GridItem>   
      } else {
          return <GridItem active={this.state.active} handleClick={this.handleClick} key={item.id} item={item}>      
          <img alt="" src={item.images.fixed_width.url} />
        </GridItem>   
      }
    });

    return (
      <AppContainerDiv>
        <Hero headline="Because I love Frasier" />
        {gridContents}
      </AppContainerDiv>

    );
  }
}

export default App;

const AppContainerDiv = styled.div`
  margin: 35px
`;




