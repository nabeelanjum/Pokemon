import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGetPokemonListQuery } from "../services/pokemon";
import { setPokemonList } from "../store/slices/pokemon.slice";
import { RootState } from "../store";

const usePokemonList = () => {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector((state: RootState) => state.pokemon);

  const limit = useRef(20);

  const [page, setPage] = useState(0);

  const offset = useMemo(() => page * limit.current, [page]);

  const { data, error, isLoading } = useGetPokemonListQuery(offset);

  useEffect(() => {
    // If loading next page then merge existing and new results
    // If loading first page or `pull to refresh` then just use new results
    const newList = offset > 0
      ? [...pokemonList, ...data?.results || []]
      : data?.results;

    dispatch(setPokemonList(newList || []));
  }, [data?.results]);

  const setNextPage = useCallback(() => {
    setPage((cPage) => cPage + 1);
  }, [setPage]);

  const resetPage = useCallback(() => {
    setPage(0);
  }, [setPage]);

  return {
    pokemonList,
    error,
    isLoading,
    setNextPage,
    resetPage,
  }
}

export default usePokemonList;
