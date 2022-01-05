import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "1ce2590ac5msh0f26059f80c4f08p1bfdc0jsn02fffaafcb2a"
};

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi= createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;
