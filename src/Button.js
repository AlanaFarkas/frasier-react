import React, {useState, useEffect} from 'react';

import styled from 'styled-components';

export const Button = (props) => {
    const [isClicked, handleClickState] = useState(false)

    const handleClick = () => {
        handleClickState(!isClicked)
    }

    //because it triggers a rerender on every click b/c the state changed! But how to avoid this...?
    useEffect(() => {
        console.log("I'm mounted")
        return () => console.log("I'm unmounted")
    });    

    const text = isClicked ? 'false' : 'true';

    return (
        <StyledButton onClick={handleClick}>{text}</StyledButton>
    )
}

const StyledButton = styled.button`
    width: 200px;
    height: 48px;
    margin: 50px 0 0 50px;
    color: white;
    font-weight: bold;
    background-color: darkblue;
    font-size: 18px;
`