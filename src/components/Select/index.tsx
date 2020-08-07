import React, { SelectHTMLAttributes } from 'react'

import './style.css';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value:string;
    label: string;
  }>;
}

const Select: React.FC<InputProps> = ({label, name, options, ...rest}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} defaultValue={''}>
        {options && (
          <option value="" disabled hidden>
            Selecione uma opção
          </option>
        )}
        {options &&
          options.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select
