import React from 'react';
import './style.scss';
import { COLORS } from '../../constants/colors';
import classNames from 'classnames';

type TypographyComponentProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  variant?: 'PLite' | 'Heading1' | 'Heading2';
  className?: string;
};

type TypographyVariant = 'PLite' | 'Heading1' | 'Heading2';

export const TypographyComponent = ({
  children: childrenText,
  style,
  color = COLORS.SHARK_COLOR,
  variant = 'PLite',
  className,
}: TypographyComponentProps & { variant?: TypographyVariant }) => {
  const textStyle = { ...style, color: color };

  const components: Record<
    TypographyVariant,
    React.ComponentType<TypographyComponentProps>
  > = {
    PLite: ({ children }) => (
      <p className={classNames('p-lite', className)} style={textStyle}>
        {children}
      </p>
    ),
    Heading1: ({ children }) => (
      <h1 className={classNames('heading-1', className)} style={textStyle}>
        {children}
      </h1>
    ),
    Heading2: ({ children }) => (
      <h2 className={classNames('heading-2', className)} style={textStyle}>
        {children}
      </h2>
    ),
  };

  const Typography = components[variant];

  if (!Typography) {
    throw new Error(`Invalid typography variant: ${variant}`);
  }

  return <Typography>{childrenText}</Typography>;
};
