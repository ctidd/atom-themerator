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
            { fields.map((field, i) => (
                <li key={ field.token }>
                    <Field
                        id={ field.token }
                        label={ field.label }
                        value={ field.value }
                        onChange={ onFieldChange }
                        />
                </li>
            )) }
        </ul>
    </form>
);
