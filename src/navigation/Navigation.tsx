import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../utils/navigation-util";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import { useTheme } from "../theme/useTheme";

const Stack = createNativeStackNavigator();
export default function Navigation() {
 const theme = useTheme();
 const appTheme = {
  ...DefaultTheme,
  colors: {
   ...DefaultTheme.colors,
   background: theme.colors.background,
   text: theme.colors.text,
   card: theme.colors.card,
   border: theme.colors.border,
   notification: theme.colors.notification,
   primary: theme.colors.primary,
  },
 };
 return (
  <NavigationContainer ref={navigationRef} theme={appTheme}>
   <Stack.Navigator
    initialRouteName="Login"
    screenOptions={() => ({
     headerShown: false,
    })}
   >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}
