import React from 'react';
import styled from 'styled-components';

const GridItem = ({item, handleClick, active}) => {
    return (
        <GridItemDiv active={active} onClick={() => handleClick({item})}>
            <strong>{item.title}</strong>
            <img alt="" src={item.images.fixed_width.url} />
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

