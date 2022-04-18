import React from 'react';
import { BaseComponentProps } from 'src/types';

interface GridProps extends BaseComponentProps {
  children: JSX.Element | JSX.Element[];
}

export const GridRow: React.FC<GridProps> = ({
  className,
  children,
  style
}) => {
  return (
    <div className={`row ${className}`} style={style}>
      {children}
    </div>
  );
};
