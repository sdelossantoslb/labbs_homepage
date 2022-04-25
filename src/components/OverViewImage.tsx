import React from 'react';
import { BaseComponentProps } from '../types';

interface OverViewImageProps extends BaseComponentProps {
  imageSrc: string;
}
const OverViewImage: React.FC<OverViewImageProps> = ({
  className = '',
  style,
  imageSrc
}) => {
  return (
    <section style={style} className={`overview-image ${className}`}>
      <img src={imageSrc} alt="Image" />
    </section>
  );
};

export default OverViewImage;
