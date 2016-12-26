import React from 'react';
import AnotherComponent from './Component';

export default class SyntaxPreview extends React.component {
    constructor(props) {
        super(props);

        this.state = {
            content: props.content,
        };
    }

    isEven() {
        return this.state.content.length % 2 === 0;
    }

    render() {
        if (this.state.content.length === 0) {
            return;
        }

        return (
            <AnotherComponent options={ { isEven: this.isEven() } }>
                { this.state.content }
            </AnotherComponent>
        );
    }
}

SyntaxPreview.propTypes = {
    content: React.PropTypes.string,
};
