import {
    List,
    Datagrid,
    TextField,
    NumberField,
  } from 'react-admin';
  
  const AuthorList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="birthYear" />
      </Datagrid>
    </List>
  );
  
  export default AuthorList;
  