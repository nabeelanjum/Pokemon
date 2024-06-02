import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import usePokemonList from '../../hooks/usePokemonList';
import PokemonList from '../PokemonList';
import { stackRoutes } from '../../navigation/configs';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('../../hooks/usePokemonList');

describe('PokemonList', () => {
  const mockUseNavigation = useNavigation as jest.Mock;
  const mockUsePokemonList = usePokemonList as jest.Mock;

  const navigate = jest.fn();

  beforeEach(() => {
    mockUseNavigation.mockReturnValue({ navigate });
    mockUsePokemonList.mockReturnValue({
      pokemonList: [],
      error: null,
      isLoading: false,
      resetPage: jest.fn(),
      setNextPage: jest.fn(),
    });
  });

  it('should render list of pokemons', () => {
    mockUsePokemonList.mockReturnValue({
      pokemonList: [{
        name: 'Pikachu',
        url: 'https://pokeapi.co/api/v2/ability/1/'
      }, {
        name: 'Bulbasaur',
        url: 'https://pokeapi.co/api/v2/ability/2/'
      }],
      error: null,
      isLoading: false,
      resetPage: jest.fn(),
      setNextPage: jest.fn(),
    });

    const { getByText } = render(<PokemonList />);
    expect(getByText('Pikachu')).toBeTruthy();
    expect(getByText('Bulbasaur')).toBeTruthy();
  });

  it('should navigate to PokemonDetails on press', () => {
    mockUsePokemonList.mockReturnValue({
      pokemonList: [{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/ability/1/' }],
      error: null,
      isLoading: false,
      resetPage: jest.fn(),
      setNextPage: jest.fn(),
    });

    const { getByText } = render(<PokemonList />);
    fireEvent.press(getByText('Pikachu'));
    expect(navigate).toHaveBeenCalledWith(stackRoutes.PokemonDetails, { id: '1' });
  });

  it('should render empty list message when there are no pokemons', () => {
    mockUsePokemonList.mockReturnValue({
      pokemonList: [],
      error: null,
      isLoading: false,
      resetPage: jest.fn(),
      setNextPage: jest.fn(),
    });

    const { getByText } = render(<PokemonList />);
    expect(getByText('No results, pull down to refresh.')).toBeTruthy();
  });

  it('should render error message when there is an error', () => {
    mockUsePokemonList.mockReturnValue({
      pokemonList: [],
      error: 'Error loading list',
      isLoading: false,
      resetPage: jest.fn(),
      setNextPage: jest.fn(),
    });

    const { getByText } = render(<PokemonList />);
    expect(getByText('Oops, there was an error loading the list. Pull down to try again.')).toBeTruthy();
  });

});
