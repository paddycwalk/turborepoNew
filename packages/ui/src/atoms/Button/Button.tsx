import styles from "./Button.module.scss";
import clsx from "clsx";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  title?: string;
  color?: string;
  style?: string;
  id?: string;
  children?: React.ReactNode;
  ariaDisabled?: boolean;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  tabIndex?: number;
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  outline?: boolean;
  borderless?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "medium",
  label,
  disabled,
  type = "button",
  title = "Button",
  color,
  style,
  id,
  onClick,
  children,
  ariaDisabled,
  ariaExpanded,
  ariaHasPopup,
  ariaLabel,
  ariaDescribedBy,
  tabIndex,
  className,
  iconLeft,
  iconRight,
  outline,
  borderless,
}: ButtonProps) => {
  const classes = clsx(
    className,
    styles.Button,
    size && styles[`Button-${size}`],
    color && styles[`Button-${color}`],
    style && styles[`Button-${style}`],
    outline && styles["Button-outline"],
    (iconLeft || iconRight) && styles["Button_icon"],
    borderless && styles["Button-borderless"]
  );

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-disabled={ariaDisabled}
      aria-expanded={ariaExpanded}
      tabIndex={tabIndex}
      title={title}
      id={id}
      onClick={onClick}
      aria-haspopup={ariaHasPopup}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {iconLeft && children}
      {label}
      {iconRight && children}
    </button>
  );
};
