import React from 'react';
import Field from '../ui/field/Field';

export default ({ fields, onFieldChange, snippets, onSnippetChange }) => (
    <form>
        <ul className="atui-vList atui-vList_sm">
            <li>
                <Field
                    id="snippets"
                    label="Language Preview"
                    options={ snippets.map(s => {
                        return { name: s.get('name'), value: s.get('name') };
                    }) }
                    onChange={ onSnippetChange.bind('') }
                    />
            </li>
            { fields.map((field, i) => (
                <li key={ field.get('token') }>
                    <Field
                        id={ field.get('token') }
                        label={ field.get('label') }
                        value={ field.get('value') }
                        onChange={ onFieldChange.bind(field.get('token')) }
                        />
                </li>
            )).toArray() }
        </ul>
    </form>
);
