import { MouseEventHandler } from 'react';
import styles from './Link.module.scss';
import clsx from 'clsx';

export interface LinkProps {
  children?: React.ReactNode;
  href: string;
  rel?: string;
  id?: string;
  target?: '_self' | '_blank';
  onClick?: MouseEventHandler;
  role?: string;
  title?: string;
  tabIndex?: number;
  ariaDisabled?: boolean;
  className?: string;
  disabled?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  label: string;
  size?: 'small' | 'medium' | 'large';
}

export const Link = ({
  children,
  href = '#',
  rel = 'noopener',
  id,
  target = '_self',
  onClick,
  role = 'link',
  title = 'Link',
  tabIndex,
  ariaDisabled,
  className,
  disabled,
  iconLeft,
  iconRight,
  label,
  size,
}: LinkProps) => {
  return (
    <a
      href={href}
      className={clsx({
        [`${className}`]: className,
        [styles['Link']]: true,
        [styles[`Link-${size}`]]: size,
        [styles['Link-disabled']]: disabled,
        [styles['Link_icon']]: iconLeft ?? iconRight,
      })}
      rel={rel}
      id={id}
      target={target}
      onClick={onClick}
      role={role}
      title={title}
      tabIndex={tabIndex}
      aria-disabled={ariaDisabled}
    >
      {iconLeft && children}
      {label}
      {iconRight && children}
    </a>
  );
};
