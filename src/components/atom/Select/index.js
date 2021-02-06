import "./Select.css"
const Select = (props) => {
  const { options, placeholder } = props;
  return (
    <select className="select">
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export { Select };
