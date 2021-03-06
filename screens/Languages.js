import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import LottieView from "lottie-react-native";

const { width } = Dimensions.get('window');

const languages = [
    {
        id: 1,
        name: 'Javascript',
        icon: 'javascript.png',
    },
]

export default function Languages({ navigation }) {

    const scrollX = new Animated.Value(0)

    function renderLanguage(item, index) {
        const isLastItem = index === languages.length - 1;
        return (
            <View
              style={[
                styles.flex,
                styles.column,
                styles.language,
                styles.shadow,
                index !== 0 ? { marginLeft: 10 } : null,
                isLastItem ? { marginRight: 10 } : null,
              ]}
            >
               <LottieView
                style={styles.animation}
                autoPlay
                source={require('../assets/animations/animacao_bola.json')}
                />
              <TouchableOpacity
                style={[styles.flex, styles.languageContainer]}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('TechScreen')}
              >
                <Image
                    style={{
                        width: 150,
                        height: 150,
                    }}
                    source={require('../assets/images/javascript.png')} />
                  <View activeOpacity={0.8} style={styles.column}>
                    <Text style={styles.name}>
                      {item.name}
                    </Text>
                  </View>
              </TouchableOpacity>
            </View>
          );
    }
    function renderLanguages(){
        return (
            <View style={[styles.column, styles.languages]}>
                <FlatList
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="center"
                    data={languages}
                    keyExtractor={item => `${item.id}`}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                    renderItem={({ item, index }) => renderLanguage(item, index)}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.icon} source={require('../assets/images/instagram.png')} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Instagram</Text>
                    <Text style={styles.description}>Tecnologias utilizadas</Text>
                </View>
            </View>
            {renderLanguages()}
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
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: width,
    height: 600,
    zIndex: -5,
    position: 'absolute',
    top: 0,
  },
  name: {
    fontWeight: 'bold',
    color: '#000',
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
    fontSize: 46,
    color: '#FFF',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20,
    color: '#FFF',
  },
 
});