import React from 'react';
import AppLayout from './AppLayout';
import ThemeBuilder from './ThemeBuilder';
import Style from '../ui/style/Style';
import snippets from './config/snippets';
import fields from './config/fields';
import stylesheet from './config/theme/stylesheet';
import previewStylesheet from './config/theme/previewStylesheet';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.themeBuilder = new ThemeBuilder();

        this.state = {
            snippet: snippets[0].snippet,
            styles: this.themeBuilder.process(stylesheet, fields),
            previewStyles: this.themeBuilder.process(previewStylesheet, fields),
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
        fields[fieldKey] = { ...fields[fieldKey], value };

        const styles = this.themeBuilder.process(stylesheet, fields);
        const previewStyles = this.themeBuilder.process(previewStylesheet, fields);

        this.setState({ fields, styles, previewStyles });
    }

    onDownload(e) {
        e.preventDefault();
        this.themeBuilder.download(this.state.styles);
    }

    render() {
        return (
            <div>
                <Style>{ this.state.previewStyles }</Style>
                <Style>{ this.state.styles }</Style>
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
