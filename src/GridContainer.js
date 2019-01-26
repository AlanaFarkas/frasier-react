import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({active, gridItems, onClick}) => {
    const gridContents = gridItems.map((item) => 
        <GridItem onClick={onClick} active={active} key={item.id}>
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
`;



