import React from 'react';
import styled from 'styled-components';

const GridItem = ({item, handleMouseEnter, children}) => {
    return (
        <GridItemDiv onMouseEnter={() => handleMouseEnter({item})}>
            {children}
        </GridItemDiv>
    )
}

export default GridItem;

const GridItemDiv = styled.div`
    position: relative
    margin: 20px;
`;

