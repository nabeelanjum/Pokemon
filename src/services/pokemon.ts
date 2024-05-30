import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from '../common/types';

const API_VERSION = 'v2';
const BASE_URL = `https://pokeapi.co/api/${API_VERSION}/`;

interface ListResponse {
  results: Pokemon[];
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<ListResponse, void>({
      query: () => `pokemon`,
    }),
    getPokemonById: builder.query<Pokemon, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
