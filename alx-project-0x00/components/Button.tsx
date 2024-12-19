import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-green-500 text-white hover:bg-green-600 m-2 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
