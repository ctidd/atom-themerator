/* global it, expect */

import ThemeBuilder from './ThemeBuilder';
import fields from './config/fields';

it('processes stylesheet variables', () => {
    const initial = `
        foo {
            color: @ui-text;
            background: @ui-background;
        }
    `;
    const expected = `
        foo {
            color: #fff;
            background: #101010;
        }
    `;

    const themeBuilder = new ThemeBuilder();
    const result = themeBuilder.process(initial, fields);
    expect(result).toBe(expected);
});
