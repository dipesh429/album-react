import './Image.css';

const Image = (props) => {
  const { url, alt, type } = props;
  return (
    <img
      className={`${type === 'avatar' ? 'avatar' : 'album-image'}`}
      src={url}
      alt={alt}
    />
  );
};

export { Image };
