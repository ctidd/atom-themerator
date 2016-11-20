import React from 'react';
import Immutable from 'immutable';
import AppStyleInjector from './AppStyleInjector';
import AppLayout from './AppLayout';
import snippets from './config/snippets';
import fields from './config/fields';
import stylesheet from './config/stylesheet';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: Immutable.fromJS({
                snippet: snippets.JavaScript,
                styles: this.processStylesheet(stylesheet, Immutable.fromJS(fields)),
                fields,
            }),
        };

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(key, value) {
        let data = this.state.data;
        data = data.setIn(['fields', key, 'value'], value);
        data = data.setIn(['styles'], this.processStylesheet(stylesheet, data.get('fields')));
        this.setState({ data });
    }

    processStylesheet(styles, fields) {
        return fields.reduce((stylesheet, field, key) => {
            const pattern = new RegExp(`@${key}`, 'g');
            const value = field.get('value');
            console.log(value);
            return stylesheet.replace(pattern, value);
        }, styles);
    }

    render() {
        return (
            <div>
                <AppStyleInjector styles={ this.state.data.get('styles') } />
                <AppLayout
                    snippet={ this.state.data.get('snippet') }
                    fields={ this.state.data.get('fields') }
                    onFieldChange={ this.onFieldChange }
                    />
            </div>
        );
    }
}
