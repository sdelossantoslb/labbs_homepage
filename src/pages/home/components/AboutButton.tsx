import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';
import useLocateContext from 'src/hooks/useLocateContext';

const AboutButton = () => {
  const lang = useLocateContext();
  return (
    <LinkButton
      href="/about"
      className="default-btn-one"
      text={lang.buttonAbouttUs}
    >
      <span></span>
    </LinkButton>
  );
};

export default AboutButton;
