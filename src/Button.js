import React from 'react';

export const Button = (props) => {
    const { onClick, children, ariaProps } = props;

    const arias = {
        'aria-label': ariaProps.ariaLabel,
        'aria-pressed': ariaProps.ariaPressed,
        'aria-expanded': ariaProps.ariaExpanded
    }

    return (
        <button 
        onClick={onClick} 
        {...arias}
        >
            {children}
        </button>
    )
}