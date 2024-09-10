import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const Password = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
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

export default Password;