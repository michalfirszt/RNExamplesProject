import React from "react";
import { Button, Text, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={() => navigate("MainTabs")} />
    </View>
  );
};
