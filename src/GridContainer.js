import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({active, data, handleClick}) => {

    const gridContents = data.map((item) => 

        <GridItem active={active} handleClick={() => handleClick({item})} key={item.id}>
        {/* if item.id === selectedObj.id  */}
            <strong>{item.title}</strong>
            {/* else */}
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



