import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Titulo from './src/componentes/titulo/';
import Main from './src/componentes/main/';

export default function App() {
  return(
    <View style={styles.container}>

        <Titulo />
        <Main/>
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
