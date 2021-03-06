import React from 'react';
import AppLayout from './AppLayout';
import ThemeBuilder from './ThemeBuilder';
import Style from '../ui/style/Style';
import snippets from './config/snippets';
import fields from './config/fields';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onSnippetChange = this.onSnippetChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onDownload = this.onDownload.bind(this);
        this.onRestore = this.onRestore.bind(this);

        this.tb = new ThemeBuilder();
        this.state = null;
        this.init();
    }

    async init() {
        await this.tb.init();

        this.setState({
            snippet: snippets[0].snippet,
            styles: this.tb.process(this.tb.assets.styles, fields),
            syntaxVariables: this.tb.process(this.tb.assets.syntaxVariables, fields),
            webStyles: this.tb.process(this.tb.assets.webStyles, fields),
            fields,
        });
    }

    onSnippetChange(e) {
        const name = e.target.value;

        const snippet = snippets
            .find(snippet => snippet.name === name)
            .snippet;

        this.setState({ snippet });
    }

    onFieldChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        const fields = { ...this.state.fields };
        fields[key] = { ...fields[key], value };

        const styles = this.tb.process(this.tb.assets.styles, fields);
        const syntaxVariables = this.tb.process(this.tb.assets.syntaxVariables, fields);
        const webStyles = this.tb.process(this.tb.assets.webStyles, fields);

        this.setState({
            fields,
            styles,
            syntaxVariables,
            webStyles,
        });
    }

    onDownload(e) {
        e.preventDefault();
        this.tb.download(
            this.state.styles,
            this.state.syntaxVariables,
            this.state.fields,
        );
    }

    onRestore(e) {
        const reader = new FileReader();

        reader.onload = f => {
            const fields = Object.assign({}, this.state.fields, JSON.parse(f.target.result));
            const styles = this.tb.process(this.tb.assets.styles, fields);
            const syntaxVariables = this.tb.process(this.tb.assets.syntaxVariables, fields);
            const webStyles = this.tb.process(this.tb.assets.webStyles, fields);

            this.setState({
                fields,
                styles,
                syntaxVariables,
                webStyles,
            });
        };

        reader.readAsText(e.target.files[0]);
    }

    render() {
        if (this.state === null) {
            return null;
        }

        return (
            <div>
                <Style>{ this.state.webStyles }</Style>
                <Style>{ this.state.styles }</Style>
                <AppLayout
                    snippet={ this.state.snippet }
                    snippets={ snippets }
                    onSnippetChange={ this.onSnippetChange }
                    fields={ this.state.fields }
                    onFieldChange={ this.onFieldChange }
                    onDownload={ this.onDownload }
                    onRestore={ this.onRestore }
                    />
            </div>
        );
    }
}
