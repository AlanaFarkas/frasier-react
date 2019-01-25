import React from 'react';
// import GridItem from './GridItem';

const GridContainer = ({gridItems}) => {
    const gridContents = gridItems.map((item) => 
        <iframe src={item.embed_url} />
    );
    return gridContents;
}

export default GridContainer;
