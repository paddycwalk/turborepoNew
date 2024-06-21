'use client';

import styles from './Icon.module.scss';
import SVG from 'react-inlinesvg';
import clsx from 'clsx';

export interface IconProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
  fill?: string;
  size?: string;
  className?: string;
  ariaHidden?: boolean;
  ariaDescribedBy?: string;
  ariaLabel?: string;
}

export const Icon = ({
  src,
  width,
  height,
  title,
  fill,
  size,
  className,
  ariaHidden,
  ariaDescribedBy,
  ariaLabel,
}: IconProps) => {
  return (
    <SVG
      className={clsx({
        [`${className}`]: className,
        [styles['Icon']]: true,
        [styles[`Icon-${size}`]]: size,
      })}
      src={src}
      width={width}
      height={height}
      title={title}
      fill={fill}
      aria-hidden={ariaHidden}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
    />
  );
};
