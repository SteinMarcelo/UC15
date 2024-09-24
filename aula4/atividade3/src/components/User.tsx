import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

interface UserProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const User = ({ user, setUser }: UserProps) => {
  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={setUser} value={user} />
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

export default User;
