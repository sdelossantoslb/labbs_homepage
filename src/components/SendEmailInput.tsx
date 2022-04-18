import React from 'react';
import { BaseComponentProps } from 'src/types';
import FormContent, { InputFormControl } from './form';

interface SendEmailProps extends BaseComponentProps {
  to?: string;
  from?: string;
  message?: string;
  textButton?: string;
  failMessage?: string;
  successMessage?: string;
  endpointSubmit?: string;
}
const SendEmailInput = ({ className, textButton }: SendEmailProps) => {
  return (
    <FormContent>
      <div style={{ maxWidth: '500px' }}>
        <InputFormControl
          type="email"
          className="input-newsletter"
          placeHolder="Enter your email"
          name="EMAIL"
          required
          autoComplete="off"
        />
        <button type="submit">{textButton}</button>
        <div id="validator-newsletter" className="form-result"></div>
      </div>
    </FormContent>
  );
};

export default SendEmailInput;
