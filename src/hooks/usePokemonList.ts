import { useGetPokemonListQuery } from "../services/pokemon";

const usePokemonList = () => {
  const { data, error, isLoading, refetch } = useGetPokemonListQuery();

  const pokemonList = data?.results;

  return {
    pokemonList,
    error,
    isLoading,
    refetch,
  }
}

export default usePokemonList;
