import styles from './Label.module.scss';

export interface LabelProps {
  label: string;
  id?: string;
}

export const Label = ({ label, id }: LabelProps) => {
  return (
    <label className={styles.Label} htmlFor={id}>
      {label}
    </label>
  );
};
