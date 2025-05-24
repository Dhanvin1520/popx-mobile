import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  defaultValue?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  defaultValue,
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className={`input-label ${required ? 'required-field' : ''}`}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-input"
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;