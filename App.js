import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function App() {
    useEffect(() => {
      setInterval(() => {
      }, 2000);
    }, []);

    return (
      <View style={styles.animationContainer}>
        <LottieView
          style={styles.animation}
          autoPlay
          source={require('./assets/animations/ovelhadev.json')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    backgroundColor: '#2B306E',
    justifyContent: "center",
    alignItems: "center"
  },
  animation: {
    width: 400,
    height: 400,
  }
});
