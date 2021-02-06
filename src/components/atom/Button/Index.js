import "./Button.css"

const Button = (props) => {
  const { text } = props;
  return <button className="button">{text} </button>;
};

export { Button };
