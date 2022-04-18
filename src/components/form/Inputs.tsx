import React from 'react';
import { BaseComponentProps } from 'src/types';
interface InputProps extends BaseComponentProps {
  type: 'email' | 'text' | 'password' | 'bigText' | 'phone';
  placeHolder?: string;
  required?: boolean;
  rows?: number;
  name?: string;
  autoComplete?: 'off' | 'on';
}
const InputElement = (props: InputProps) => {
  if (props.type === 'bigText')
    return (
      <textarea
        rows={props.rows}
        {...{ ...props, className: `form-control ${props.className}` }}
      />
    );
  return (
    <input {...{ ...props, className: `form-control ${props.className}` }} />
  );
};

export default InputElement;
