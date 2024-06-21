import { Label } from '../Label/Label';
import styles from './Radiobox.module.scss';

export interface RadioboxProps {
  label: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  value?: string;
}

export const Radiobox = ({ label, name, id, disabled, checked, required, value }: RadioboxProps) => {
  return (
    <>
      <input
        type="radio"
        className={styles.Radiobox}
        name={name}
        id={id}
        disabled={disabled}
        checked={checked}
        required={required}
        value={value}
      />
      {label && <Label label={label} id={id} />}
    </>
  );
};
