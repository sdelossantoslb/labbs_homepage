import React from 'react';
import { BaseComponentProps } from '../types';

interface OverViewImageProps extends BaseComponentProps {
  imageSrc: string;
  imageStyle?: React.CSSProperties;
}
const OverViewImage: React.FC<OverViewImageProps> = ({
  className = '',
  style,
  imageStyle,
  imageSrc
}) => {
  return (
    <section style={style} className={`overview-image ${className}`}>
      <img style={imageStyle} src={imageSrc} alt="Image" />
    </section>
  );
};

export default OverViewImage;
