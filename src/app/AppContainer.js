import React from 'react';
import Immutable from 'immutable';
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import AppStyleInjector from './AppStyleInjector';
import AppLayout from './AppLayout';
import snippets from './config/snippets';
import fields from './config/fields';
import stylesheet from './config/theme/stylesheet';
import previewStylesheet from './config/theme/previewStylesheet';
import themePackageJson from './config/theme/package';
import themeReadme from './config/theme/readme';
import themeLicense from './config/theme/license';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.snippets = Immutable.fromJS(snippets);
        const immutableFields = Immutable.fromJS(fields);

        this.state = {
            data: Immutable.fromJS({
                snippet: this.snippets.get(0).get('snippet'),
                styles: this.processStylesheet(stylesheet, immutableFields),
                previewStyles: this.processStylesheet(previewStylesheet, immutableFields),
                fields: immutableFields,
            }),
        };

        this.onSnippetChange = this.onSnippetChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onDownload = this.onDownload.bind(this);
    }

    onSnippetChange(e) {
        const value = e.target.value;

        let data = this.state.data;
        const selected = this.snippets
            .find(snippet => snippet.get('name') === value)
            .get('snippet');
        data = data.set('snippet', selected);
        this.setState({ data });
    }

    onFieldChange(e) {
        const token = e.target.id;
        const value = e.target.value;
        let data = this.state.data;
        const field = data.get('fields').findKey(field => field.get('token') === token);

        data = data.setIn(['fields', field, 'value'], value);
        data = data.setIn(['styles'],
            this.processStylesheet(stylesheet, data.get('fields')));
        data = data.setIn(['previewStyles'],
            this.processStylesheet(previewStylesheet, data.get('fields')));

        this.setState({ data });
    }

    processStylesheet(styles, fields) {
        return fields.reduce((stylesheet, field, i) => {
            const token = fields.get(i).get('token');
            const pattern = new RegExp(`@${token};`, 'g');
            const value = field.get('value');
            return stylesheet.replace(pattern, `${value};`);
        }, styles);
    }

    onDownload(e) {
        e.preventDefault();
        const zip = new JSZip();
        zip.file('index.less', this.state.data.get('styles'));
        zip.file('package.json', themePackageJson);
        zip.file('README.md', themeReadme);
        zip.file('LICENSE.md', themeLicense);
        zip.generateAsync({ type: 'blob' }).then(blob => FileSaver.saveAs(blob, 'theme.zip'));
    }

    render() {
        return (
            <div>
                <AppStyleInjector styles={ this.state.data.get('previewStyles') } />
                <AppStyleInjector styles={ this.state.data.get('styles') } />
                <AppLayout
                    snippet={ this.state.data.get('snippet') }
                    snippets={ this.snippets }
                    onSnippetChange={ this.onSnippetChange }
                    fields={ this.state.data.get('fields') }
                    onFieldChange={ this.onFieldChange }
                    onDownload={ this.onDownload }
                    />
            </div>
        );
    }
}
