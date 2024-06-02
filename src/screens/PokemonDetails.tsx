import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import usePokemonDetails from '../hooks/usePokemonDetails';
import { AppText, InfoTile } from '../components';
import colors from '../common/colors';

const PokemonDetails = () => {

  const route = useRoute();

  const id: string = route.params?.id || '';

  const {
    pokemonDetails,
    error,
    isLoading,
  } = usePokemonDetails(id);

  if (isLoading) {
    return (
      <ActivityIndicator
        size='large'
        style={{ marginTop: 40 }}
        testID='loading-indicator'
      />
    );
  }

  if (!!error) {
    return (
      <AppText style={styles.errorText}>
        Oops, there was an error fetching details
      </AppText>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pokemonDetails?.sprites.front_default }}
        style={styles.image}
        testID='pokemon-image'
      />

      <View style={styles.body}>
        <InfoTile title='Name' value={pokemonDetails?.name} />
        <InfoTile title='Height' value={pokemonDetails?.height.toString()} />
        <InfoTile title='Weight' value={pokemonDetails?.weight.toString()} />
        <InfoTile title='Types' value={pokemonDetails?.types.map((type) => type.type.name).join(', ')} />
      </View>
    </View>
  );
}

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  errorText: {
    marginTop: 40,
    marginHorizontal: 20,
    textAlign: 'center',
  }
});
