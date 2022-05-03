import React from 'react';
import { Link } from 'react-router-dom';
import { BaseComponentProps } from 'src/types';

interface LinkButtonProps extends BaseComponentProps {
  href?: string;
  text?: string;
  children?: JSX.Element | JSX.Element[];
  enableHtmlLink?: boolean;
  openNewTab?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href = '',
  text = '',
  children,
  className = '',
  openNewTab,
  enableHtmlLink,
  style
}) => {
  if (enableHtmlLink)
    return (
      <a
        href={href}
        style={style}
        target={openNewTab ? '_blank' : '_parent'}
        className={`default-btn ${className}`}
      >
        {text} {children}
      </a>
    );
  return (
    <Link to={href} style={style} className={`default-btn ${className}`}>
      {text} {children || <br></br>}
    </Link>
  );
};

export default LinkButton;
