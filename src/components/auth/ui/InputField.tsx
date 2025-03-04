import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  feedback?: boolean;
  className?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  required = false,
  feedback = false,
  className = '',
  placeholder = '',
}) => {
  return (
    <div className="field mb-4">
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>

      {type === 'password' ? (
        <div className="w-full p-input-wrapper">
          <Password
            id={id}
            value={value}
            onChange={onChange}
            toggleMask
            feedback={feedback}
            required={required}
            className={classNames('w-full', className)}
            inputClassName="w-full"
            placeholder={placeholder}
          />
        </div>
      ) : (
        <InputText
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={classNames('w-full', className)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputField;
