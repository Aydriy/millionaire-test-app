import * as React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  to?: string;
  className?: string;
};

export const LinkButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  to = '',
}) => (
  <Link
    to={to}
    className={classNames('button-regular link-button', className)}
    onClick={onClick}
  >
    {children}
  </Link>
);
