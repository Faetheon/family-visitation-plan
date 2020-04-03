import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from 'react-native';

import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";

import store from "./src/redux-modules/store";

import Profile from './src/screens/Profile';
import Home from "./src/screens/Home";
import DeaconsList from "./src/screens/DeaconsList";
import FamiliesList from "./src/screens/FamiliesList";
import VisitationList from "./src/screens/VisitationList";

const styles = StyleSheet.create({});

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
          >
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Deacon List"
              component={DeaconsList}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Family List"
              component={FamiliesList}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Visit List"
              component={VisitationList}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
