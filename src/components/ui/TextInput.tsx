import React, { ChangeEvent } from 'react';
import { BaseComponentProps } from 'src/types';

interface TextInputFieldProps extends BaseComponentProps {
  type?: 'text' | 'number' | 'email' | 'textarea';
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string | number | undefined;
  label?: string;
  disabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  icon?: any;
  smallText?: string;
  placeHolder?: string;
  name?: string;
}
const TextInputField = ({
  type = 'text',
  className,
  disabled,
  icon,
  label,
  name,
  onChange,
  placeHolder,
  smallText,
  isInvalid,
  isRequired,
  style,
  value
}: TextInputFieldProps) => {
  if (type === 'textarea')
    return (
      <div className="form-group">
        <label>{label}</label>
        <textarea
          disabled={disabled}
          name={name}
          required
          className={`${className} form-control`}
          onChange={onChange}
          value={value}
          placeholder={placeHolder}
          rows={4}
          style={{ resize: 'none' }}
        />
        <small className="form-text text-muted">{smallText}.</small>
      </div>
    );

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        disabled={disabled}
        type={type}
        required
        className={`${className} form-control`}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
        style={{ resize: 'none' }}
      />
      <small className="form-text text-muted">{smallText}.</small>
    </div>
  );
};

export default TextInputField;
