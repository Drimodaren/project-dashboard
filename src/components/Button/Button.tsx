/** @jsxImportSource @emotion/react */
import type { ButtonHTMLAttributes } from 'react';
import { buttonStyles } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}
function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button css={buttonStyles(variant ?? 'primary')} {...props}>
      {children}
    </button>
  );
}

export default Button;
