import { IMySelect, IOption } from '../../types';

import './MySelect.css';

export const MySelect = ({ options, defaultValue, value, onChange }: IMySelect) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} className="main__select">
      <option value="" disabled>
        {defaultValue}
      </option>
      {options.map((option: IOption) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
