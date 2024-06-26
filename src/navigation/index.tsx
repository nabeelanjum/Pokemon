import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigation from './AppStackNavigation';

const RootNavigation = () => {

  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
