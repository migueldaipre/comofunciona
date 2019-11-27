import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Languages() {
  return (
    <View style={styles.container}>
      <View styles={styles.titleContainer}>
        <Text style={styles.como}>Instagram</Text>
        <Text style={styles.funciona}>Tecnologias utilizadas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#2B306E',
    paddingTop: 120,
    padding: 20,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  como: {
    fontSize: 52,
    color: '#FFF'
  },
  funciona: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold'
  },
 
});