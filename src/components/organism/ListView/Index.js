import { placeholder } from '../../../mock/albums';
import { users } from '../../../mock/users';
import { Image } from '../../atom/Image';

const ListView = (props) => {
  const { albums, handleVote, removeItem } = props;

  const selectProfile = (name) => {
    return users.find((user) => user.name === name).avatar;
  };

  return albums.length ? (
    albums
      //sort with highest vote
      .sort((x, y) => y.vote - x.vote)
      .map((each, index) => (
        <div key={index} className="album">
          <Image url={each.album_url || placeholder} alt="album" />
          <div className="album-right">
            <div className="vote">
              <span className="arrow-up" onClick={() => handleVote(index)}>
                &#9650;
              </span>
              <span>{each.vote}</span>
            </div>
            <a className="album-name" target="_blank" href={each.more_info}>
              {each.album_name}
            </a>
            <p className="band-name">{`${each.band_name}, ${each.release_year}`}</p>
            <div className="avatar-block">
              <p className="submitted-by">Submitted by: </p>
              <Image
                url={selectProfile(each.submitted_by)}
                alt="people"
                type="avatar"
              />
            </div>
          </div>
          <button className="remove" onClick={() => removeItem(index)}>
            Delete
          </button>
        </div>
      ))
  ) : (
    <span className="no-album"> There is no albums. Please Add New Album Below </span>
  );
};

export { ListView };
