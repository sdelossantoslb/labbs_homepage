import React from 'react';
import { BaseComponentProps } from '../types';

interface SectionProps extends BaseComponentProps {
  sectionTitle?: string;
  sectionSubTitle?: string;
  children: JSX.Element | JSX.Element[];
}
const SectionContainer: React.FC<SectionProps> = ({
  className = '',
  style,
  sectionSubTitle,
  sectionTitle,
  children
}) => {
  return (
    <section style={style} className={`section-padding ${className}`}>
      <div className="container">
        {(sectionSubTitle || sectionTitle) && (
          <div className="section-title">
            {sectionSubTitle && <h6>{sectionSubTitle}</h6>}
            {sectionTitle && <h2>{sectionTitle}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
