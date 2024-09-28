import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Titulo from './src/componentes/titulo/';
import Form from './src/componentes/form/';

export default function App() {
  return(
    <View style={styles.container}>

        <Titulo />
        <Form />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },

});
