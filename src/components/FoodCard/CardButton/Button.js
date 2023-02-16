import React from 'react';
import './button.css';

export default function Button(props) {
    const {children} = props;
    return(
        <div>
            <button type="button">{children}</button>
        </div>
    )
  }