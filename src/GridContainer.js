import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({active, data, handleClick}) => {

    // if active.id === item.id ? render strong tag
    const gridContents = data.map((item) => 

        <GridItem active={active} handleClick={() => handleClick({item})} key={item.id}>
            <strong>{item.title}</strong>
            <img alt="" src={item.images.fixed_width.url} />
        </GridItem>        
    );

    return (
        <GridContainerDiv>
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



