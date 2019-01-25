import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({gridItems}) => {
    const gridContents = gridItems.map((item) => 
        <GridItemiFrame key={item.id} url={item.embed_url} />
    );
    return gridContents;
}

export default GridContainer;

const GridItemiFrame = styled(GridItem)`
    border: none;
    width: 300px;
    height: 300px;
    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
`;


