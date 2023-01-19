import { FC, MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  restProps?: {};
}

export const Button: FC<ButtonProps> = ({ children, onClick, restProps }) => {
  return (
    <button className={styles.button} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};
