import * as React from 'react';
import './style.scss';

type ButtonProps = {
  children: React.ReactNode;
};
export const MobileButton: React.FC<ButtonProps> = ({ children }) => (
  <button className="button-mobile">{children}</button>
);
