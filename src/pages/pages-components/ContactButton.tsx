import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';
import useLocateContext from 'src/hooks/useLocateContext';

const ContactButton = () => {
  const lang = useLocateContext();

  return (
    <LinkButton href="/contact" text={lang.buttonContactUs}>
      <span></span>
    </LinkButton>
  );
};

export default ContactButton;
