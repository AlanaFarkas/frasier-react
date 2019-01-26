import React from 'react';
import GridItem from './GridItem';
import styled from 'styled-components';

const GridContainer = ({gridItems}) => {
    const gridContents = gridItems.map((item) => 
        <GridItem key={item.id}>
            <img alt="" src={item.images.original.url} />
        </GridItem>        
    );

    return (
        <div>
            {gridContents}
        </div>
    )   
}

export default GridContainer;


