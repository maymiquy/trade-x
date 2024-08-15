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
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Toast from "react-native-toast-message";

GoogleSignin.configure({
 webClientId:
  "234933592151-1m4rq4cvdtvttf4o4el8ttai76mu52a6.apps.googleusercontent.com",
 forceCodeForRefreshToken: true,
 offlineAccess: true,
});

const App = () => {
 return (
  <Provider store={store}>
   <Navigation />
   <Toast visibilityTime={4500} bottomOffset={0} position="bottom" />
  </Provider>
 );
};

export default App;
