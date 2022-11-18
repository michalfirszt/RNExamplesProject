import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen, ProfileScreen } from "../screens";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainTabs = () => (
  <Tabs.Navigator initialRouteName="Home">
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tabs.Screen name="Profile" component={ProfileScreen} />
  </Tabs.Navigator>
);

export const MainStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);
