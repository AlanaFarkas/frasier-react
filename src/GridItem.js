import React from 'react';

const GridItem = ({url, ...restProps}) => {
    return (
        <iframe {...restProps} title={url.title} src={url} />
    )
}

export default GridItem;