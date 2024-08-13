/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/hooks/store";

const App = () => {
 return (
  <Provider store={store}>
   <Navigation />
  </Provider>
 );
};

export default App;
