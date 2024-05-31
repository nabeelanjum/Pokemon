import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon, PokemonDetails } from '../common/types';

const API_VERSION = 'v2';
const BASE_URL = `https://pokeapi.co/api/${API_VERSION}/`;

interface ListResponse {
  count: number,
  next: null | string;
  previous: null | string;
  results: Pokemon[];
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<ListResponse, number>({
      query: (offset = 0) => `pokemon?offset=${offset}`,
    }),
    getPokemonById: builder.query<PokemonDetails, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokemonApi;
