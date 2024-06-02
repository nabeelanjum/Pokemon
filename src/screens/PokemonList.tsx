import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AppText, PokemonCard, Separator } from '../components';
import usePokemonList from '../hooks/usePokemonList';
import { useNavigation } from '@react-navigation/native';
import { stackRoutes } from '../navigation/configs';
import colors from '../common/colors';

const PokemonList = () => {

  const navigation = useNavigation();

  const {
    pokemonList,
    error,
    isLoading,
    resetPage,
    setNextPage,
  } = usePokemonList();

  const renderListEmptyComponent = useMemo(() => {
    if (isLoading) return null;

    return (
      <AppText style={styles.errorText}>
        {!!error
          ? 'Oops, there was an error loading the list. Pull down to try again.'
          : 'No results, pull down to refresh.'
        }
      </AppText>
    );
  }, [error, isLoading]);

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        // Giving index in keyExtractor doesn't checks for duplication
        // Normally I give `ID` but we don't have any id here that's why I relied on name
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={(id: string) => navigation.navigate(stackRoutes.PokemonDetails, { id })}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={renderListEmptyComponent}
        onEndReached={() => setNextPage()}
        onEndReachedThreshold={0.5}
        onRefresh={resetPage}
        refreshing={isLoading}
      />
    </View>
  );
}

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errorText: {
    marginTop: 40,
    marginHorizontal: 20,
    textAlign: 'center',
  }
});
