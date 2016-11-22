import React from 'react';
import Field from '../ui/field/Field';

export default ({ fields, onFieldChange }) => (
    <form>
        <ul className="atui-vList atui-vList_sm">
            { fields
                .toArray()
                .sort((a, b) => a.index - b.index)
                .map((field, i) => (
                <li key={ field.get('token') }>
                    { console.log(field.get('token')) }
                    <Field
                        id={ field.get('token') }
                        label={ field.get('label') }
                        value={ field.get('value') }
                        onChange={ onFieldChange.bind(field.get('token')) }
                        />
                </li>
            )) }
        </ul>
    </form>
);
