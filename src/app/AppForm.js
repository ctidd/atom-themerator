import React from 'react';
import Field from '../ui/field/Field';

export default ({ fields, onFieldChange, snippets, onSnippetChange }) => (
    <form>
        <ul className="atui-vList atui-vList_sm">
            <li>
                <Field
                    id="snippets"
                    label="Language Preview"
                    options={ snippets.map(snippet => {
                        return { name: snippet.name, value: snippet.name };
                    }) }
                    onChange={ onSnippetChange }
                    />
            </li>
            { Object.keys(fields).map(key => (
                <li key={ key }>
                    <Field
                        id={ key }
                        label={ fields[key].label }
                        value={ fields[key].value }
                        onChange={ onFieldChange }
                        />
                </li>
            )) }
        </ul>
    </form>
);
