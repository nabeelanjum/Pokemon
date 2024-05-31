import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonListQuery } from "../services/pokemon";
import { useEffect } from "react";
import { setPokemonList } from "../store/slices/pokemon.slice";
import { RootState } from "../store";

const usePokemonList = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useGetPokemonListQuery();

  useEffect(() => {
    dispatch(setPokemonList(data?.results || []));
  }, [data?.results]);

  const { pokemonList } = useSelector((state: RootState) => state.pokemon);

  return {
    pokemonList,
    error,
    isLoading,
    refetch,
  }
}

export default usePokemonList;
