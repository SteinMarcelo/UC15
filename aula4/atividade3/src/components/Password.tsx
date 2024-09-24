import React, { SetStateAction } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

interface PasswordProps {
  password: string;
  setPassword: React.Dispatch<SetStateAction<string>>;
}

const Password = ({ password, setPassword }: PasswordProps) => {
  return (
    <SafeAreaView>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
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
    width: 250,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Password;
