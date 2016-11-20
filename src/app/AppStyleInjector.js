import React from 'react';

export default ({ styles }) => (
    <style dangerouslySetInnerHTML={ { __html: styles } } />
);
