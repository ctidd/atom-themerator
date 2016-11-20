import React from 'react';
import Field from '../ui/field/Field';

export default ({ fields, onFieldChange }) => (
    <form>
        <ul className="atui-vList atui-vList_sm">
            { fields.map((field, key) => (
                <li key={ key }>
                    <Field
                        id={ key }
                        label={ field.get('label') }
                        value={ field.get('value') }
                        onChange={ onFieldChange.bind(key) }
                        />
                </li>
            )).toArray() }
        </ul>
    </form>
);
