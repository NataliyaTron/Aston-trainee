import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1",
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => "/all",
    }),
    getAllCountries: builder.query({
      query: () => "all?fields,capital,flags,population, region",
    }),
  }),
});

export const { useGetAllQuery, useGetAllCountriesQuery } = mockApi;
