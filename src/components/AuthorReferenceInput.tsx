import { ReferenceInput, SelectInput } from 'react-admin';

const AuthorReferenceInput = () => (
  <ReferenceInput source="authorId" reference="authors" label="Author">
    <SelectInput optionText="name" />
  </ReferenceInput>
);

export default AuthorReferenceInput;
