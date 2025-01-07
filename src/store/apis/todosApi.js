// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    // prepareHeaders: (headers, { getState }) => {
    //     const token = getState().auth.token;
    //     if (token) {
    //         headers.set('authorization', `Bearer ${token}`);
    //     }
    //     return headers;
    // },
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => 'todos',
        }),
        getTodo: builder.query({
            query: (id) => `todos/${id}`,
        }),
    }),
});

export const {
    useGetTodosQuery,
    useGetTodoQuery
} = todosApi;