import { fetchUtils, DataProvider } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;

const customDataProvider: DataProvider = simpleRestProvider(apiUrl, httpClient);

// to flatten filter object
const myDataProvider: DataProvider = {
  ...customDataProvider,

  getList: async (resource, params) => {
    const {
      filter = {},
      pagination = { page: 1, perPage: 10 },
      sort = { field: 'id', order: 'ASC' }
    } = params;
  
    const urlParams = new URLSearchParams();
  
    Object.entries(filter).forEach(([key, value]) => {
      urlParams.append(key, String(value));
    });
  
    // Pagination and sorting
    urlParams.append('_page', String(pagination.page));
    urlParams.append('_limit', String(pagination.perPage));
    urlParams.append('_sort', sort.field);
    urlParams.append('_order', sort.order);
  
    const url = `${apiUrl}/${resource}?${urlParams.toString()}`;
    console.log('[📦] Fetching:', url); // debug log
  
    const { headers, json } = await httpClient(url);
  
    return {
      data: json,
      total: parseInt(headers.get('Content-Range')?.split('/')?.[1] || '0', 10),
    };
  }
  
};

export default myDataProvider;
