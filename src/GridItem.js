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
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 20px;
`;

