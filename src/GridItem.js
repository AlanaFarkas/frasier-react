import React from 'react';
import styled from 'styled-components';

const GridItem = ({children, handleClick}) => {
    return (
        <GridItemDiv onClick={handleClick}>
            {children}
        </GridItemDiv>
    )
}

export default GridItem;

const GridItemDiv = styled.div`
    display: inline-block;
    margin: 20px;
`;