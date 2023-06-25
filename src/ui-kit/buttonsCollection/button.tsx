import * as React from 'react';
import './style.scss';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
};
export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  onClick,
}) => (
  <button
    className={classNames('button-regular', isLoading && 'button-loading')}
    disabled={isLoading}
    onClick={onClick}
  >
    {children}
  </button>
);
