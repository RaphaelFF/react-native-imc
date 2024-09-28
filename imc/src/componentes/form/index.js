import React from "react";
import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Altura</Text>

            <TextInput style={styles.input}
            placeholder="ex: 1.80"
            keyboardType="numeric"
            ></TextInput>

            <Text style={styles.text}>Peso</Text>

            <TextInput style={styles.input}
            placeholder="ex: 85.3"
            keyboardType="numeric"
            ></TextInput>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    margin: 50,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});