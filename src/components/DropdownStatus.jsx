import React from 'react';

const DropdownStatus = ({ options, defaultValue, onChange }) => {
    return (
        <select 
            className="form-select form-select-sm w-auto" 
            defaultValue={defaultValue}
            onChange={onChange}
        >
            {options.map((opt, index) => (
                <option key={index} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default DropdownStatus;