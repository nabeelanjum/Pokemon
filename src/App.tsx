import React from "react";
import { View } from "react-native";
import { Provider } from 'react-redux';

import RootNavigation from "./navigation";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
