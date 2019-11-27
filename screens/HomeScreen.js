import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const apps = [
  {
    id: 1,
    name: 'Instagram',
    icon: require('../assets/images/instagram.png'),
    languages: [
      {
        id: 1,
        name: 'Javascript',
        description: 'Descrição sobre o javascript',
        colorBackground: '#AF8A1E',
      }
    ]
  },
  {
    id: 2,
    name: 'Whatsapp',
    icon: 'whats.json',
    languages: [
      {
        id: 1,
        name: 'Java',
        description: 'Descrição sobre o Java',
        colorBackground: 'red',
      }
    ]
  },
  {
    id: 3,
    name: 'Whatsapp',
    icon: 'whats.json',
    languages: [
      {
        id: 1,
        name: 'Java',
        description: 'Descrição sobre o Java',
        colorBackground: 'red',
      }
    ]
  },
  {
    id: 4,
    name: 'Whatsapp',
    icon: 'whats.json',
    languages: [
      {
        id: 1,
        name: 'Java',
        description: 'Descrição sobre o Java',
        colorBackground: 'red',
      }
    ]
  }
]

export default function HomeScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollX = new Animated.Value(0)

  function renderApp(item, index) {
    return (
      <View style={styles.appItem}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Languages')}
        >
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              source={item.icon} />
            <View activeOpacity={0.8}>
              <Text style={styles.nameApp}>
                {item.name}
              </Text>
            </View>    
        </TouchableOpacity>
      </View>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View style={[styles.flex, styles.row, styles.containerDots]}>
        {apps.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View styles={styles.titleContainer}>
        <Text style={styles.como}>Como</Text>
        <Text style={styles.funciona}>Funciona ?</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.leftContent}>
          <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.helpButton}>
            <Text style={styles.helpText}> ? </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContent}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            data={apps}
            keyExtractor={item => `${item.id}`}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
            renderItem={({ item, index }) => renderApp(item, index)}
          />
          { renderDots() }
        </View>
      </View>
      <View style={styles.footerContent}>
          <View style={styles.footerBorder}></View>
          <Text style={styles.footerText}>Saiba mais sobre as linguagens de programação dos principais apps.</Text>
      </View>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalOpen}
        >
        <View style={{marginTop: 22}}>
          <View>
            <Text style={styles.aboutTitle}>Sobre nós</Text>
            <Text style={styles.aboutDescription}>Não importa se você está começando sua jornada no mundo da programação agora ou já tem experiência com outras linguagens. Te levamos a mergulhar nesse mundo onde o limite é a sua imaginação. Vamos caminhar com você nesse mundo.
Somos uma plataforma que direciona o aluno em uma direção certa para o seu crescimento como programador com alguns desafios e recompensas, direcionando o aluno paras as melhores plataformas de ensino e o mais importante levar o aluno a se encontrar no mercado de trabalho.</Text>
            <TouchableOpacity
              style={styles.modalButtonClose}
              onPress={() => setModalOpen(false)}>
              <Image source={require('../assets/images/close.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContent: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContent: {
    flex: 1,
    paddingVertical: 10,
  },
  helpButton: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#E84541',
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpText: {
    fontSize: 48,
    color: '#FCC826',
    fontWeight: 'bold'
  },
  appItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2,
    height: 200,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 24,
    backgroundColor: '#FFF',
  },
  aboutTitle: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#130F2E',
  },
  aboutDescription: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2D2D2D',
    padding: 20,
  },
  modalButtonClose: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
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
  nameApp: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#131239',
  },
  footerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerBorder: {
    width: width - 40,
    height: 2,
    backgroundColor: '#FCC826',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  containerDots: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10 * 2,
  },
  dots: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderRadius: 2,
    marginHorizontal: 2,
    backgroundColor: '#eee',
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: '#E84541',
  },
});