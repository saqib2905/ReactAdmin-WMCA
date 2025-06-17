import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin';
import AuthorReferenceInput from '../../components/AuthorReferenceInput';

const BookEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" label="Title" fullWidth />
      <AuthorReferenceInput />
      <NumberInput source="publishedYear" label="Year" />
    </SimpleForm>
  </Edit>
);

export default BookEdit;
