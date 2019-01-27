import React from 'react';
import styled from 'styled-components';

const GridItem = ({children, handleClick, active}) => {
    return (
        <GridItemDiv active={active} onClick={handleClick}>
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

