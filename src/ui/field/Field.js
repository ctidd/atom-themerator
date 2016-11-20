import React from 'react';
import './field.css';

export default ({
    label,
    id = label.replace(/ /g, ''),
    name = id,
    value = '',
    key,
    onChange = Function.prototype,
    validator = () => true,
}) => {
    const handleChange = e => {
        onChange(id, e.target.value);
    };

    return (
        <div className="atui-field">
            <label
                className="atui-field-label"
                htmlFor={ id }>
                { label }
            </label>
            <input
                className="atui-field-input"
                name={ id }
                id={ id }
                value={ value }
                onChange={ handleChange }
                />
        </div>
    );
};
