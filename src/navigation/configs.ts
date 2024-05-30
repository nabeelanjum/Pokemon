import { StackNavigationOptions } from "@react-navigation/stack";

export const stackRoutes = {
  PokemonList: 'PokemonList',
  PokemonDetails: 'PokemonDetails',
}

export const stackConfig: StackNavigationOptions = {
  headerTitleAlign: "left",
  headerBackTitleVisible: false,
}
