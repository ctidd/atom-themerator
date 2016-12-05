import JSZip from 'jszip';
import FileSaver from 'file-saver';
import CONFIG from './config/config';

export default class ThemeBuilder {
    constructor() {
        this.assets = {};
    }

    async init() {
        const toString = response => response.text();

        const requests = [
            fetch(`${CONFIG.themePath}/index.less`)
                .then(toString)
                .then(str => this.assets.index = str),

            fetch(`${CONFIG.themePath}/stylesheets/styles.less`)
                .then(toString)
                .then(str => this.assets.styles = str),

            fetch(`${CONFIG.themePath}/stylesheets/syntax-variables.less`)
                .then(toString)
                .then(str => this.assets.syntaxVariables = str),

            fetch(`${CONFIG.themePath}/web.less`)
                .then(toString)
                .then(str => this.assets.webStyles = str),

            fetch(`${CONFIG.themePath}/README.md`)
                .then(toString)
                .then(str => this.assets.readme = str),

            fetch(`${CONFIG.themePath}/LICENSE.md`)
                .then(toString)
                .then(str => this.assets.license = str),

            fetch(`${CONFIG.themePath}/package.json`)
                .then(toString)
                .then(str => this.assets.packageJson = str),
        ];

        return Promise.all(requests);
    }

    process(styles, fields) {
        let result = styles;

        Object.keys(fields).forEach(key => {
            const pattern = new RegExp(`@${key};`, 'g');
            result = result.replace(pattern, `${fields[key].value};`);
        });

        return result;
    }

    download(styles, syntaxVariables, fields) {
        const zip = new JSZip();
        zip.file('index.less', this.assets.index);
        zip.file('stylesheets/styles.less', styles);
        zip.file('stylesheets/syntax-variables.less', syntaxVariables);
        zip.file('README.md', this.assets.readme);
        zip.file('LICENSE.md', this.assets.license);
        zip.file('package.json', this.assets.packageJson);
        zip.file('atom-themerator.json', JSON.stringify(fields));
        zip.generateAsync({ type: 'blob' }).then(blob => FileSaver.saveAs(blob, 'theme.zip'));
    }
}
