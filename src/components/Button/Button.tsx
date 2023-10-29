import { useMemo } from 'react';

type ButtonProps = {
  children: string;
  color: string;
  onClick?: () => void;
};

const Button = ({ children, color, onClick }: ButtonProps) => {
  const textColor = useMemo(() => {
    if (color === 'red') return 'text-red-500';
    return 'text-blue-500';
  }, [color]);

  return (
    <button className={textColor} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
