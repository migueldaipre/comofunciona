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
    name: 'Facebook',
    icon: 'facebook.png',
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
  }
]

export default function HomeScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  function renderApp(item, index) {
    const isLastItem = index === apps.length - 1;

    return (
      <View style={styles.appItem}>
        <TouchableOpacity
          style={styles.shadow}
          activeOpacity={0.8}
          onPress={() => {}}
        >
            <Image
              style={[styles.shadow, { borderRadius: 24 }]}
              source={require('../assets/images/facebook.png')} />
            <View activeOpacity={0.8}>
              <Text style={styles.nameApp}>
                {item.name}
              </Text>
            </View>    
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View styles={styles.titleContainer}>
        <Text style={styles.como}>Como</Text>
        <Text style={styles.funciona}>Funciona ?</Text>
      </View>
      <View styles={styles.contentContainer}>
        <View styles={styles.leftContent}>
          <TouchableOpacity onPress={() => setModalOpen(true)} style={styles.helpButton}>
            <Text style={styles.helpText}> ? </Text>
          </TouchableOpacity>
        </View>
        <View styles={styles.rightContent}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            data={apps}
            keyExtractor={item => `${item.id}`}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
            renderItem={({ item, index }) => renderApp(item, index)}
          />
        </View>
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
    flexDirection: 'row',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'column'
  },
  helpButton: {
    width: 100,
    height: 100,
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
    flex: 1,
    flexDirection: 'column',
    width: (width / 2) - 20,
    height: 200,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20 * 0.66,
    borderRadius: 24,
    backgroundColor: '#FFF'
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
  },
  modalButtonClose: {
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
