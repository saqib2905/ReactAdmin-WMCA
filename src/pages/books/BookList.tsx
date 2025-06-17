import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    NumberField,
    TextInput,
    ReferenceInput,
    SelectInput,
    DeleteButton
  } from 'react-admin';
  
  const bookFilters = [
    <TextInput source="title"
      label="Search by Title"
      alwaysOn
      key="title"
    />,
    <ReferenceInput source="authorId" reference="authors" label="Filter by Author">
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ];
  
  
  const BookList = () => (
    <List filters={bookFilters}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="authorId" reference="authors" label="Author">
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="publishedYear" label="Published" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
  
  export default BookList;
  