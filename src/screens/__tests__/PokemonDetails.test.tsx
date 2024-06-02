import React from 'react';
import { render } from '@testing-library/react-native';
import { useRoute } from '@react-navigation/native';
import usePokemonDetails from '../../hooks/usePokemonDetails';
import PokemonDetails from '../PokemonDetails';

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
}));

jest.mock('../../hooks/usePokemonDetails');

describe('PokemonDetails', () => {
  const mockUseRoute = useRoute as jest.Mock;
  const mockUsePokemonDetails = usePokemonDetails as jest.Mock;

  beforeEach(() => {
    mockUseRoute.mockReturnValue({
      params: { id: '1' },
    });
  });

  it('should display loading indicator while loading', () => {
    mockUsePokemonDetails.mockReturnValue({
      pokemonDetails: null,
      error: null,
      isLoading: true,
    });

    const { getByTestId } = render(<PokemonDetails />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('should display error message if there is an error', () => {
    mockUsePokemonDetails.mockReturnValue({
      pokemonDetails: null,
      error: 'Error fetching details',
      isLoading: false,
    });

    const { getByText } = render(<PokemonDetails />);
    expect(getByText('Oops, there was an error fetching details')).toBeTruthy();
  });

  it('should display pokemon details', () => {
    const mockPokemonDetails = {
      name: 'Pikachu',
      height: 4,
      weight: 60,
      sprites: { front_default: 'image_url' },
      types: [{ type: { name: 'electric' } }],
    };

    mockUsePokemonDetails.mockReturnValue({
      pokemonDetails: mockPokemonDetails,
      error: null,
      isLoading: false,
    });

    const { getByText, getByTestId } = render(<PokemonDetails />);

    // Check if the image is rendered
    expect(getByTestId('pokemon-image').props.source.uri).toBe('image_url');

    // Check if InfoTiles are rendered with correct values
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Pikachu')).toBeTruthy();
    expect(getByText('Height')).toBeTruthy();
    expect(getByText('4')).toBeTruthy();
    expect(getByText('Weight')).toBeTruthy();
    expect(getByText('60')).toBeTruthy();
    expect(getByText('Types')).toBeTruthy();
    expect(getByText('electric')).toBeTruthy();
  });
});
