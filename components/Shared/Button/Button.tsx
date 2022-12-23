import { forwardRef } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

enum BtnVariants {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

enum BtnSizeEnum {
  small = "small",
  medium = "medium",
  large = "large",
}

type ButtonProps = JSX.IntrinsicElements["button"] & {
  variant?: keyof typeof BtnVariants;
  size?: keyof typeof BtnSizeEnum;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = BtnVariants.primary, className = "", type = "button", size = "medium", ...props }, ref) => {
    const bVariant = styles[variant];
    const bSize = styles[size ?? "medium"];

    return (
      <button
        type={type}
        ref={ref}
        {...props}
        className={classnames(`${styles.button}`, bSize, bVariant, `${className}`)}
      />
    );
  },
);

Button.displayName = "Button";
