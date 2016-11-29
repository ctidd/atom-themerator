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
            fetch(`${CONFIG.themePath}/stylesheet.css`)
                .then(toString)
                .then(str => this.assets.stylesheet = str),

            fetch(`${CONFIG.themePath}/previewStylesheet.css`)
                .then(toString)
                .then(str => this.assets.previewStylesheet = str),

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
        return fields.reduce((stylesheet, field, i) => {
            const token = fields[i].token;
            const pattern = new RegExp(`@${token};`, 'g');
            const value = field.value;
            return stylesheet.replace(pattern, `${value};`);
        }, styles);
    }

    download(styles) {
        const zip = new JSZip();
        zip.file('index.less', styles);
        zip.file('README.md', this.assets.readme);
        zip.file('LICENSE.md', this.assets.license);
        zip.file('package.json', this.assets.packageJson);
        zip.generateAsync({ type: 'blob' }).then(blob => FileSaver.saveAs(blob, 'theme.zip'));
    }
}
