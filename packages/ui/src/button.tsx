import "./button.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  textColor?: string;
  /** How large should the button be? */
  size?: "sm" | "md" | "lg";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  size = "lg",
  backgroundColor,
  textColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`].join(" ")}
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      {label}
    </button>
  );
};
