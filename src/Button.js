import React, {useState, useEffect} from 'react';

export const FancyButton = React.forwardRef((props, ref) => (
    <button onClick={props.onClick} ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));