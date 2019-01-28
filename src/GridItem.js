import React from 'react';
import styled from 'styled-components';

const GridItem = ({item, handleClick, children}) => {
    return (
        <GridItemDiv onClick={() => handleClick({item})}>
            {children}
        </GridItemDiv>
    )
}

export default GridItem;

const GridItemDiv = styled.div`
    position: relative
    margin: 20px;
`;

