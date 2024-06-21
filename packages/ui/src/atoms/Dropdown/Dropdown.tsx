import styles from './Dropdown.module.scss';

export interface DropdownProps {
  name?: string;
  id?: string;
  value?: string;
  // label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  data: Options[];
}

interface Options {
  value?: string;
  label?: string;
}

export const Dropdown = ({ name, id, value, placeholder, required, disabled, data }: DropdownProps) => {
  const options = data.map((option: Options) => {
    return (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <select name={name} id={id} required={required} disabled={disabled} className={styles.Dropdown}>
      {placeholder && (
        <option value={value} disabled selected>
          {placeholder}
        </option>
      )}
      {options}
    </select>
  );
};
