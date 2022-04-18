import React from 'react';
import { Link } from 'react-router-dom';
import { BaseComponentProps } from 'src/types';

interface LinkButtonProps extends BaseComponentProps {
  href?: string;
  text?: string;
  children: JSX.Element | JSX.Element[];
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href = '',
  text = '',
  children,
  className = '',
  style
}) => {
  return (
    <Link to={href} style={style} className={`default-btn ${className}`}>
      {text} {children}
    </Link>
  );
};

export default LinkButton;
