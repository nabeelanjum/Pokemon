import { useGetPokemonByIdQuery } from "../services/pokemon";

const usePokemonDetails = (id: string) => {
  const { data, error, isLoading } = useGetPokemonByIdQuery(id);

  return {
    pokemonDetails: data,
    error,
    isLoading,
  }
}

export default usePokemonDetails;
