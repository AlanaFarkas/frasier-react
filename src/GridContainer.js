import React from 'react';
import GridItem from './GridItem';

const GridContainer = ({gridItems}) => {
    const gridContents = gridItems.map((item) => 
        <GridItem url={item.embed_url} />
    );
    return gridContents;
}

export default GridContainer;
