import React from 'react';
import styled from 'styled-components';

const GridItem = ({children, onClick, active}) => {
    return (
        <GridItemDiv active={active} onClick={onClick}>
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

