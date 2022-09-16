import { Props } from '../../../types';

import './MyButton.css';

export const MyButton = ({ children, ...props }: Props) => {
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};
