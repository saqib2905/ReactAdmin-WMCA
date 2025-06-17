import React from 'react';
import { Admin, Resource } from 'react-admin';

import BookList from './pages/books/BookList';
import BookEdit from './pages/books/BookEdit';
import AuthorList from './pages/authors/AuthorList';

import simpleRestProvider from 'ra-data-simple-rest';
import myDataProvider from './dataProvider';

const useCustomProvider = true;

const App = () => (
  <Admin
    dataProvider={
      useCustomProvider
        ? myDataProvider
        : simpleRestProvider('http://localhost:3001')
    }
  >
    <Resource name="books" list={BookList} edit={BookEdit} />
    <Resource name="authors" list={AuthorList} />
  </Admin>
);

export default App;
