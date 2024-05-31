import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PokemonCard, Separator } from '../components';
import usePokemonList from '../hooks/usePokemonList';
import { useNavigation } from '@react-navigation/native';
import { stackRoutes } from '../navigation/configs';

const PokemonList = () => {

  const navigation = useNavigation();

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
          <PokemonCard pokemon={item} onPress={(id: string) => navigation.navigate(stackRoutes.PokemonDetails, { id })} />
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
