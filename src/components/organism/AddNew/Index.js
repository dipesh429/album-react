import { Button } from '../../atom/Button/Index';
import { Input } from '../../atom/Input';
import { Select } from '../../atom/Select';
const options = ['John', 'Harry', 'Alex'];

const AddNew = () => (
  <div>
    <p className="add-new">Add New</p>
    <form>
      <Input required placeholder="Album Name" />
      <Input required placeholder="Band Name" />
      <Input required placeholder="Release Year" />
      <Input placeholder="Album Cover URL" />
      <Input required placeholder="More Info URL" />
      <Select options={options} placeholder="Submitted by" />
      <Button text="Submit" />
    </form>
  </div>
);

export { AddNew };
