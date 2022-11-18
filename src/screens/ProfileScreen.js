import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

export const ProfileScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};
