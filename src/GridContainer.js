import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({data, active, handleClick}) => {

    const gridContents = data.map(item =>     
        <GridItem active={active} handleClick={handleClick} key={item.id} item={item}/>      
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
    `;



