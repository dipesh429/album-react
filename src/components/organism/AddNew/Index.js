import { options } from '../../../mock/users';
import { Button } from '../../atom/Button/Index';
import { Input } from '../../atom/Input';
import { Select } from '../../atom/Select';

const AddNew = (props) => {
  const { handleSubmit, handleChange, currentValue } = props;
  return (
    <div>
      <p className="add-new">Add New</p>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="Album Name"
          name="album_name"
          value={currentValue.album_name}
          onChange={handleChange}
        />
        <Input
          required
          placeholder="Band Name"
          name="band_name"
          value={currentValue.band_name}
          onChange={handleChange}
        />
        <Input
          required
          name="release_year"
          value={currentValue.release_year}
          placeholder="Release Year"
          onChange={handleChange}
        />
        <Input
          placeholder="Album Cover URL"
          name="album_url"
          value={currentValue.album_url}
          onChange={handleChange}
        />
        <Input
          required
          placeholder="More Info URL"
          name="more_info"
          value={currentValue.more_info}
          onChange={handleChange}
        />
        <Select
          options={options}
          placeholder="Submitted by"
          name="submitted_by"
          value={currentValue.submitted_by}
          onChange={handleChange}
        />
        <Button text="Submit" />
      </form>
    </div>
  );
};

export { AddNew };
