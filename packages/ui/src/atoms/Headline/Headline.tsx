import styles from "./Headline.module.scss";
import clsx from "clsx";

export interface HeadlineProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  size?: string;
  ariaHidden?: boolean;
  classname?: string;
}

export const Headline = ({
  tag: Tag,
  children,
  id,
  size,
  ariaHidden,
  classname: className,
}: HeadlineProps) => {
  const classes = clsx(
    className,
    styles.Headline,
    size && styles[`Headline-${size}`]
  );
  return (
    <Tag className={classes} id={id} aria-hidden={ariaHidden}>
      {children}
    </Tag>
  );
};
