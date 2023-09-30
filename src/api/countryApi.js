import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/all?fields=name,capital,flags,population,region",
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;
