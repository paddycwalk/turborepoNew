import styles from './Input.module.scss';
import clsx from 'clsx';

export interface InputProps {
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  autoComplete?: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  min?: number;
  max?: number;
  onChange?: () => void;
  ariaLabel?: string;
  minLength?: number;
  maxLength?: number;
  autoFocus?: boolean;
  className?: string;
  error?: boolean;
}

export const Input = ({
  placeholder,
  name,
  id,
  value,
  disabled,
  required,
  pattern,
  autoComplete,
  type,
  min,
  max,
  onChange,
  ariaLabel,
  minLength,
  maxLength,
  autoFocus,
  className,
  error,
}: InputProps) => {
  return (
    <input
      type={type}
      className={clsx({
        [`${className}`]: className,
        [styles['Input']]: true,
        [styles[`Input-error`]]: error,
      })}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      disabled={disabled}
      required={required}
      pattern={pattern}
      autoComplete={autoComplete}
      min={min}
      max={max}
      onChange={onChange}
      aria-label={ariaLabel}
      minLength={minLength}
      maxLength={maxLength}
      autoFocus={autoFocus}
    />
  );
};
