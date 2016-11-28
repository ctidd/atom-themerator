import React from 'react';
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

        this.state = {
            snippet: snippets[0].snippet,
            styles: this.processStylesheet(stylesheet, fields),
            previewStyles: this.processStylesheet(previewStylesheet, fields),
            fields,
        };

        this.onSnippetChange = this.onSnippetChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onDownload = this.onDownload.bind(this);
    }

    onSnippetChange(e) {
        const name = e.target.value;

        const snippet = snippets
            .find(snippet => snippet.name === name)
            .snippet;

        this.setState({ snippet });
    }

    onFieldChange(e) {
        const token = e.target.id;
        const value = e.target.value;

        const fieldKey = this.state.fields.findIndex(field => field.token === token);
        const fields = [...this.state.fields];
        fields[fieldKey] = { ...fields[fieldKey] };
        fields[fieldKey].value = value;

        const styles = this.processStylesheet(stylesheet, fields);
        const previewStyles = this.processStylesheet(previewStylesheet, fields);

        this.setState({ fields, styles, previewStyles });
    }

    processStylesheet(styles, fields) {
        return fields.reduce((stylesheet, field, i) => {
            const token = fields[i].token;
            const pattern = new RegExp(`@${token};`, 'g');
            const value = field.value;
            return stylesheet.replace(pattern, `${value};`);
        }, styles);
    }

    onDownload(e) {
        e.preventDefault();
        const zip = new JSZip();
        zip.file('index.less', this.state.styles);
        zip.file('package.json', themePackageJson);
        zip.file('README.md', themeReadme);
        zip.file('LICENSE.md', themeLicense);
        zip.generateAsync({ type: 'blob' }).then(blob => FileSaver.saveAs(blob, 'theme.zip'));
    }

    render() {
        return (
            <div>
                <AppStyleInjector styles={ this.state.previewStyles } />
                <AppStyleInjector styles={ this.state.styles } />
                <AppLayout
                    snippet={ this.state.snippet }
                    snippets={ snippets }
                    onSnippetChange={ this.onSnippetChange }
                    fields={ this.state.fields }
                    onFieldChange={ this.onFieldChange }
                    onDownload={ this.onDownload }
                    />
            </div>
        );
    }
}
