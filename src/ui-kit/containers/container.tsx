import * as React from 'react';
import './style.scss';

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};
export const Container: React.FC<ContainerProps> = ({ children, style }) => (
  <div className="container" style={style}>
    {children}
  </div>
);
