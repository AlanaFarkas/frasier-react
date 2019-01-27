import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({active, data, handleClick}) => {
    const gridContents = data.map((item) => 
        <GridItem handleClick={() => handleClick(item.id)} key={item.id}>
            <strong>{item.title}</strong>
            <img alt="" src={item.images.fixed_width.url} />
        </GridItem>        
    );

    return (
        <GridContainerDiv active={active}>
            {gridContents}
        </GridContainerDiv>
    )   
}

export default GridContainer;

const GridContainerDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    strong  {
        display: ${props => props.active ? 'block' : 'none'}
    }
`;



