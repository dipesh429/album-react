import './Image.css';

const Image = (props) => {
  const { url } = props;
  return <img className="album-image" src={url} />;
};

export { Image };
