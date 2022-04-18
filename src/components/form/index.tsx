import React from 'react';
import InputElement from './Inputs';
import Button from './Buttons';
import { BaseComponentProps } from 'src/types';

export const InputFormControl = InputElement;
export const ButtonFormControl = Button;

interface FormProps extends BaseComponentProps {
  children: JSX.Element[] | JSX.Element;
}
const FormContent: React.FC<FormProps> = ({ children }) => {
  return <form className="newsletter-form">{children}</form>;
};

export default FormContent;
