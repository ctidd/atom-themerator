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

    onFieldChange(token, value) {
        let data = this.state.data;
        const field = data.get('fields').findKey(field => field.get('token') === token);
        data = data.setIn(['fields', field, 'value'], value);
        data = data.setIn(['styles'], this.processStylesheet(stylesheet, data.get('fields')));
        this.setState({ data });
    }

    processStylesheet(styles, fields) {
        return fields.reduce((stylesheet, field, i) => {
            const token = fields.get(i).get('token');
            const pattern = new RegExp(`@${token}`, 'g');
            const value = field.get('value');
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
