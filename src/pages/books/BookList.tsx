import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    NumberField,
    TextInput,
    ReferenceInput,
    SelectInput,
    BulkDeleteButton,
  } from 'react-admin';
  
  const bookFilters = [
    <TextInput source="title" label="Search by Title" alwaysOn />,
    <ReferenceInput source="authorId" reference="authors" label="Filter by Author" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ];
  
  const BookList = () => (
    <List filters={bookFilters} sort={{ field: 'id', order: 'ASC' }} perPage={10}>
      <Datagrid rowClick="edit" bulkActionButtons={<BulkDeleteButton />}>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="authorId" reference="authors" label="Author">
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="publishedYear" />
      </Datagrid>
    </List>
  );
  
  export default BookList;
  