import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View styles={styles.titleContainer}>
        <Text style={styles.como}>Como</Text>
        <Text style={styles.funciona}>Funciona ?</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B306E',
    padding: 20,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  como: {
    fontSize: 22,
    color: '#FFF'
  },
  funciona: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
