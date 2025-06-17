import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import BookList from './pages/books/BookList';
import BookEdit from './pages/books/BookEdit';
import AuthorList from './pages/authors/AuthorList';
// import myDataProvider from './dataProvider';

const App = () => (
<Admin dataProvider={simpleRestProvider('http://localhost:3001')}>
<Resource name="books" list={BookList} edit={BookEdit} />
    <Resource name="authors" list={AuthorList} />
  </Admin>
);

export default App;
