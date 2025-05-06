import {
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const generateBg = () => {
    const hexRange = '0123456789abcdef';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode += hexRange[Math.floor(Math.random() * 16)];
    }
    setBgColor(hexCode);
  };
  return (
    <>
      <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
      <View style={{flex: 1, backgroundColor: bgColor}}>
        <TouchableOpacity style={[styles.container]} onPress={generateBg}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, {color: bgColor}]}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 12,
    backgroundColor: '#FFC107',
    padding: 20,
    elevation: 4,
  },
  buttonText: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});
