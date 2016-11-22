import React from 'react';
import './field.css';

export default ({
    label,
    id = label.replace(/ /g, ''),
    name = id,
    value = '',
    options = [],
    key,
    onChange = Function.prototype,
}) => (
    <div className="atui-field">
        <label
            className="atui-field-label"
            htmlFor={ id }>
            { label }
        </label>
        { options.length === 0 ?
            <input
                className="atui-field-input"
                name={ id }
                id={ id }
                value={ value }
                onChange={ onChange }
                />
            :
            <select
                className="atui-field-select"
                name={ id }
                id={ id }
                onChange={ onChange }>
                { options.map(option => (
                    <option
                        key={ option.name }
                        value={ option.value }>
                        { option.name }
                    </option>
                )) }
            </select>
        }
    </div>
);
