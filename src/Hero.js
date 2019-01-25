import React from 'react';

const Hero = ({headline, children}) => {
    return (
        <>
        <h1>{headline}</h1>
        {children}
        </>
    )
}

export default Hero