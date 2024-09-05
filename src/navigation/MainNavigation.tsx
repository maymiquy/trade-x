import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SheetProvider } from "react-native-actions-sheet";
import { screenStack } from "../utils/constants/ScreenStack";

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
 return (
  <SheetProvider>
   <Stack.Navigator
    screenOptions={() => ({
     headerShown: false,
    })}
    initialRouteName="AuthScreen"
   >
    {screenStack.map((item, index) => {
     return (
      <Stack.Screen key={index} name={item.name} component={item.component} />
     );
    })}
   </Stack.Navigator>
  </SheetProvider>
 );
};

export default MainNavigation;
