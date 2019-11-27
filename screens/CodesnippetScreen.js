import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

import LottieView from "lottie-react-native";

export default function CodesnippetScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View styles={styles.titleContainer}>
        <Text style={styles.como}>Javascript</Text>
        <Text style={styles.descricao}>Partiu testar umas coisa?</Text>
        <Text style={[styles.text, { margin: 10 }]}>
          1º Abra o console apertando f12 ou com o botão esquerdo do mouse
          inspesionar elemento
        </Text>
        <Image
          style={{
            width: "100%",
            height: 100,
            marginBottom: 20
          }}
          source={require("../assets/images/screen/01.png")}
        />
        <Text style={[styles.text, { margin: 10 }]}>
          2º segundo digite 'alert' entre parênteses ('texto desejado')
        </Text>
        <Image
          style={{
            width: "100%",
            height: 100,
            marginBottom: 20
          }}
          source={require("../assets/images/screen/02.png")}
        />
        <Text style={[styles.text, { margin: 10 }]}>3º observe a mágica</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 150,
            height: 100,
            marginBottom: 20
          }}
          source={require("../assets/images/screen/images.jpeg")}
        />
        <TouchableOpacity
          style={styles.modalButtonOpen}
          onPress={() => setModalOpen(true)}
        >
          <Text style={{ color: "#FFF", margin: 20 }}>Criar cadastro</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" transparent={false} visible={modalOpen}>
        <View style={[styles.modal, { backgroundColor: "#2B306E" }]}>
          <View>
            <View style={styles.animationContainer}>
              <LottieView
                style={styles.animation}
                autoPlay
                source={require("../assets/animations/ovelhadev.json")}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B306E",
    padding: 20
  },
  titleContainer: {
    flex: 1,
    flexDirection: "column"
  },
  como: {
    fontSize: 22,
    color: "#FFF",
    marginTop: 18,
    marginLeft: 20
  },
  descricao: {
    color: "#FFF",
    marginTop: 30
  },
  funciona: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold"
  },
  snippet: {
    backgroundColor: "#f5f1f3"
  },
  text: {
    color: "#FFF"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  animationContainer: {
    flex: 1,
    backgroundColor: "#2B306E",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  animation: {
    width: 400,
    height: 400
  },
  modalButtonOpen: {
    backgroundColor: "#3c749f",
    borderRadius: 10,
    lineHeight: 30,
    marginBottom: 40,
    color: "#FFF"
  }
});