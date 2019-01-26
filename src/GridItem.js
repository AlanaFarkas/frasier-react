import React from 'react';

// const GridItem = ({url, ...restProps}) => {
//     return (
//         <iframe {...restProps} title={url.title} src={url} />
//     )
// }

const GridItem = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default GridItem;