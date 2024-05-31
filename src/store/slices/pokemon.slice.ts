import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../common/types';

interface PokemonState {
  pokemonList: Pokemon[];
}

const initialState: PokemonState = {
  pokemonList: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList(state, action: PayloadAction<Pokemon[]>) {
      state.pokemonList = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
