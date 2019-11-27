import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView 
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width } = Dimensions.get('window');

export default function TechScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.icon} source={require('../assets/images/javascript.png')} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>JavaScript</Text>
        </View>
      </View>
      <View style={
        { 
          display: 'flex', 
          flex: 1, 
          backgroundColor: '#fff', 
          borderRadius: 5, 
          marginTop: -12,
        }
      }>
        <Text
          style={
            {
              textAlign: "justify",
              fontSize: 18,
              padding: 15,  
            }
          }
        > 
          Não importa se você está começando sua jornada no mundo da programação 
          agora ou já tem experiência com outras linguagens. Você já ouviu falar 
          sobre Javascript. Esta que é uma das principais linguagens de programação 
          oferece uma variedade muito grande de frameworks e aplicações para os mais 
          diversos dispositivos. E, quem domina o Javascript, acaba se tornando um 
          programador muito versátil.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CodesnippetScreen')}>
            <Text style={styles.buttonText}>Aprender</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  languages: {
    justifyContent: 'space-between',
  },
  languageContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  language: {
    width: width - 80,
    height: 450,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#AF8A1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 34,
  },
  container: {
    flex: 1,
    backgroundColor: '#2B306E',
    paddingTop: 120,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  }, 
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginHorizontal: 20, 
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20,
    color: '#FFF',
  },
  button: {
    width: width - 40,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFD600',
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    color: "#000"
  }
});