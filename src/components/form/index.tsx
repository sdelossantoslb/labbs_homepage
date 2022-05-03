import React, { FormEvent } from 'react';
import InputElement from './Inputs';
import Button from './Buttons';
import { BaseComponentProps } from 'src/types';

export const InputFormControl = InputElement;
export const ButtonFormControl = Button;

interface FormProps extends BaseComponentProps {
  children: JSX.Element[] | JSX.Element;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}
const FormContent: React.FC<FormProps> = ({
  children,
  className,
  onSubmit
}) => {
  return (
    <form
      className={`newsletter-form form ${className} `}
      onSubmit={(e) => onSubmit && onSubmit(e)}
    >
      {children}
    </form>
  );
};

export default FormContent;
