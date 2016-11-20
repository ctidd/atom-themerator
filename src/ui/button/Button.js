import React from 'react';
import './button.css';

export default ({
    children,
    onClick = Function.prototype,
}) => (
    <button
        className="atui-button"
        onClick={ onClick }>
        { children }
    </button>
);
