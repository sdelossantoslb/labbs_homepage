import React from 'react';
import { BaseComponentProps } from '../types';

interface OverViewContentProps extends BaseComponentProps {
  title?: string;
  subTitle?: string;
  children: JSX.Element | JSX.Element[];
}
const OverViewContent: React.FC<OverViewContentProps> = ({
  className = '',
  style,
  title,
  subTitle,
  children
}) => {
  return (
    <section style={style} className={`overview-content ${className}`}>
      {subTitle && <h6>{subTitle}</h6>}
      {title && <h2>{title}</h2>}
      <div className="content">{children}</div>
    </section>
  );
};

export default OverViewContent;
