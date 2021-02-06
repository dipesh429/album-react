import './Image.css';

const Image = (props) => {
  const { url, alt } = props;
  return <img className="album-image" src={url} alt={alt} />;
};

export { Image };
