import { fetchUtils, DataProvider } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;

const baseProvider = simpleRestProvider(apiUrl, httpClient);

const myDataProvider: DataProvider = {
  ...baseProvider,

  getList: async (resource, params) => {
    const {
      filter = {},
      pagination = { page: 1, perPage: 10 },
      sort = { field: 'id', order: 'ASC' },
    } = params;

    const query = {
      _sort: sort.field,
      _order: sort.order,
      _page: pagination.page,
      _limit: pagination.perPage,
      ...filter,
    };

    const url = `${apiUrl}/${resource}?${new URLSearchParams(query as any).toString()}`;
    const { headers, json } = await httpClient(url);

    const total = parseInt(headers.get('X-Total-Count') || '0', 10);

    return {
      data: Array.isArray(json) ? json : [],
      total,
    };
  },
};

export default myDataProvider;
