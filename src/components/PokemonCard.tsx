import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { Pokemon } from '../common/types';
import AppText from './shared/AppText';

interface IProps {
  pokemon: Pokemon;
  onPress: (id: string) => void;
}

const PokemonCard: React.FC<IProps> = (props) => {
  const { onPress, pokemon } = props;

  const handleOnPress = () => {
    const id = pokemon.url.split('/')?.[6];
    onPress(id);
  }

  return (
    <Pressable
      style={styles.container}
      onPress={handleOnPress}
    >
      <Image
        source={{ uri: pokemon.url }}
        style={styles.image}
      />
      <AppText size={16}>{pokemon.name}</AppText>
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
