import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Pokemon } from '../common/types';
import AppText from './shared/AppText';

interface IProps {
  pokemon: Pokemon;
  onPress: (id: string) => void;
}

const PokemonCard: React.FC<IProps> = (props) => {
  const { onPress, pokemon } = props;

  const handleOnPress = () => {
    // A hack to extract ID out of the url
    // I know this is a very hacky way but we are not getting IDs explicitly
    const id = pokemon.url.split('/')?.[6];
    onPress(id);
  }

  return (
    <Pressable
      style={styles.container}
      onPress={handleOnPress}
    >
      <AppText size={16}>{pokemon.name}</AppText>
    </Pressable>
  );
}

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  }
});
