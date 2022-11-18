import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const Input = ({ defaultValue = "" }) => {
  const [name, setUser] = useState(defaultValue);
  const [show, setShow] = useState(false);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setUser}
        testID="input"
      />
      <Button
        title="Print Username"
        onPress={() => {
          setTimeout(() => {
            setShow(true);
          }, Math.floor(Math.random() * 200));
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
  },
});
