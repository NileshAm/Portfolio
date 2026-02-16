import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

const Button = ({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary:
      "bg-secondary hover:bg-secondary-dark text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40",
    outline:
      "border border-white/20 hover:bg-white/10 text-white backdrop-blur-sm",
    ghost: "text-textSecondary hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <>
      <span className="flex-1">{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
