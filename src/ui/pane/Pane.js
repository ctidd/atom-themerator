import React from 'react';
import './pane.css';

export const PaneOptions = {
    side: {
        left: Symbol(),
        right: Symbol(),
    },
};

export default ({ side, children }) => (
    <div className={`
        atui-pane
        ${side === PaneOptions.side.left ? 'atui-pane_left' : ''}
        ${side === PaneOptions.side.right ? 'atui-pane_right' : ''}
        `}>
        <div className="atui-pane-content">
            { children }
        </div>
    </div>
);
