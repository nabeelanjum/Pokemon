import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { Pokemon } from '../common/types';
import AppText from './shared/AppText';

interface IProps {
  pokemon: Pokemon;
  onPress: () => void;
}

const PokemonCard: React.FC<IProps> = (props) => {
  const { onPress, pokemon } = props;

  return (
    <Pressable style={styles.container}>
      <Image
        source={{ uri: pokemon.url }}
        style={styles.image}
      />
      <AppText>{pokemon.name}</AppText>
    </Pressable>
  );
}

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  }
});
