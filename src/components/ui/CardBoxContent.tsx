import React from 'react';
import { BaseComponentProps } from 'src/types';

interface CardBoxContentProps extends BaseComponentProps {
  children: JSX.Element | JSX.Element[];
  titleHeader?: string;
}

const CardBoxContent: React.FC<CardBoxContentProps> = ({
  children,
  titleHeader,
  className,
  style
}) => {
  return (
    <div className={`card ${className}`} style={style}>
      {titleHeader && <div className="card-header">{titleHeader}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardBoxContent;
