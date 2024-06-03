import React, { useMemo } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { Pokemon } from '../common/types';
import AppText from './shared/AppText';
import colors from '../common/colors';

interface IProps {
  pokemon: Pokemon;
  onPress: (id: string) => void;
}

const PokemonCard: React.FC<IProps> = (props) => {
  const { onPress, pokemon } = props;

  // A hack to extract ID out of the url
  // I know this is a very hacky way but we are not getting IDs explicitly
  const id = useMemo(() => pokemon.url.split('/')?.[6], [pokemon.url]);

  const imageUrl = useMemo(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`, [id]);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: colors.lightGrey }
      ]}
      onPress={() => onPress(id)}
    >
      <Image
        source={{ uri: imageUrl }}
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  }
});
