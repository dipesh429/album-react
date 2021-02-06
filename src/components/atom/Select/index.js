import './Select.css';
const Select = (props) => {
  const { options, placeholder, ...rest } = props;
  return (
    <select  className="select"  {...rest}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export { Select };
