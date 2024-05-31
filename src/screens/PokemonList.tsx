import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PokemonCard, Separator } from '../components';
import usePokemonList from '../hooks/usePokemonList';

const PokemonList = () => {

  const {
    pokemonList,
    error,
    isLoading,
    refetch,
  } = usePokemonList();

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <PokemonCard pokemon={item} onPress={() => { }} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  )
}

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
