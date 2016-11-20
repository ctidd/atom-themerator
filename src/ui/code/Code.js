import React from 'react';
import './code.css';

export default ({ markup }) => (
    <div
        className="atui-code"
        dangerouslySetInnerHTML={ { __html: markup } }/>
);
