import { IMySelect, IOption } from '../../types';

const MySelect = ({ options, defaultValue, value, onChange }: IMySelect) => {
  console.log('onChange', onChange);
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value='' disabled>
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

export default MySelect;
