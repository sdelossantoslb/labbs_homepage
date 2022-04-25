import React from 'react';
import LinkButton from 'src/components/ui/LinkButton';
import esLang from 'src/i18n/es';

const OnlineAppointmentButton = ({
  url = 'http://citaslabbs.com/',
  labelText
}: {
  url?: string;
  labelText?: string;
}) => {
  const text = labelText || esLang.onlineAppointmentText;
  return (
    <LinkButton
      href={url}
      enableHtmlLink={true}
      openNewTab={true}
      text={text}
    />
  );
};

export default OnlineAppointmentButton;
