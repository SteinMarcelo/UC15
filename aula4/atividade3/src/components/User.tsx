import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const User = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 5,
    width:250,
    borderRadius:10,
    backgroundColor:"white"
  },
});

export default User;
