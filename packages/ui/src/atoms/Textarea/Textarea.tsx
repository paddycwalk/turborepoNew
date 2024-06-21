import styles from './Textarea.module.scss';

export interface TextareaProps {
  required?: boolean;
  placeholder?: string;
  name?: string;
  id?: string;
  cols?: number;
  rows?: number;
  disabled?: boolean;
}

export const Textarea = ({ name, id, required, placeholder, cols, rows, disabled }: TextareaProps) => {
  return (
    <textarea
      className={styles.Textarea}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      required={required}
      placeholder={placeholder}
      disabled={disabled}
    ></textarea>
  );
};
