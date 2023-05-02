import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
	endpoints: (builder) => ({}),
});