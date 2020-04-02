import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";

import store from "./src/redux-modules/store";

import Profile from './src/screens/Profile';
import Home from "./src/screens/Home";
import DeaconsList from "./src/screens/DeaconsList";
import FamiliesList from "./src/screens/FamiliesList";
import VisitationList from "./src/screens/VisitationList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator initialRouteName="Families List">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Deacons List" component={DeaconsList} />
            <Stack.Screen name="Families List" component={FamiliesList} />
            <Stack.Screen name="Visitation List" component={VisitationList} />
          </ Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};;
