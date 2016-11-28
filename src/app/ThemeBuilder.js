import JSZip from 'jszip';
import FileSaver from 'file-saver';
import themePackageJson from './config/theme/package';
import themeReadme from './config/theme/readme';
import themeLicense from './config/theme/license';

export default class ThemeBuilder {
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
        zip.file('package.json', themePackageJson);
        zip.file('README.md', themeReadme);
        zip.file('LICENSE.md', themeLicense);
        zip.generateAsync({ type: 'blob' }).then(blob => FileSaver.saveAs(blob, 'theme.zip'));
    }
}
