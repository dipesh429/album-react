import { Image } from '../../atom/Image';
const placeholder =
  'https://images.unsplash.com/photo-1598387846101-b5e6738c6e67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80';

const ListView = (props) => {
  const { albums } = props;
  return albums
  //sort with highest vote
    .sort((x, y) => y.vote - x.vote)
    .map((each, index) => (
      <div key={index} className="album">
        <Image url={each.album_url || placeholder} alt="album" />
        <div className="album-right">
          <div className="vote">
            <span className="arrow-up">&#9650;</span>
            <span>{each.vote}</span>
          </div>
          <a className="album-name" href={each.more_info}>
            {each.album_name}
          </a>
          <p className="band-name">{`${each.band_name}, ${each.release_year}`}</p>
          <p className="submitted-by">Submitted_by: {each.submitted_by} </p>
        </div>
      </div>
    ));
};

export { ListView };
