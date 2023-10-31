import { useMemo } from 'react';

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  children: string;
  color?: string;
  role?: string;
};

const Button = ({ children, color = 'blue', role, onClick }: ButtonProps) => {
  const textColor = useMemo(() => {
    if (color === 'red') return 'text-red-500';
    return 'text-blue-500';
  }, [color]);

  return (
    <button className={textColor + ' min-w-max'} role={role} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
