import { ReactNode } from 'react';

import './MyButton.css';

interface Props {
  children?: ReactNode;
  onClick: () => void;
}

export const MyButton = ({ children, ...props }: Props) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};
