import { Label } from '../Label/Label';
import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  label: string;
  title?: string;
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export const Checkbox = ({ label, title, id, name, checked, disabled, required }: CheckboxProps) => {
  return (
    <div className={styles.Checkbox}>
      <input
        type="checkbox"
        title={title}
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        required={required}
      />
      {label && <Label label={label} id={id} />}
    </div>
  );
};
