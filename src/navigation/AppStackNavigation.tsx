import { createStackNavigator } from "@react-navigation/stack";

import { PokemonList, PokemonDetails } from '../screens';
import { stackConfig, stackRoutes } from "./configs";

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={stackConfig}>
      <Stack.Screen
        name={stackRoutes.PokemonList}
        component={PokemonList}
      />
      <Stack.Screen
        name={stackRoutes.PokemonDetails}
        component={PokemonDetails}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigation;
