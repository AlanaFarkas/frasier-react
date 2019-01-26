import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({gridItems}) => {
    const gridContents = gridItems.map((item) => 
        <GridItemDiv key={item.id}>
            <img alt="" src={item.images.original.url} />
        </GridItemDiv>
        
    );
    return gridContents;
}

export default GridContainer;

const GridItemDiv = styled(GridItem)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    border: 1px red solid;
`;


// To make more reusable part, refactor Grid item to pass in the iframe element to the component not force the GridItem to be an iframe

