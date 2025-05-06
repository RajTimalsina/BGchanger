import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  type Shape = {
    top: number;
    left: number;
    id: number;
    color: string;
    type: 'square' | 'circle';
  };

  const [bgColor, setBgColor] = useState('#ffffff');
  const [shapes, setShapes] = useState<Shape[]>([]);

  const generateBg = () => {
    const shapeType = Math.random() < 0.5 ? 'square' : 'circle';
    const hexRange = '0123456789abcdef';
    let hexCode1 = '#';
    let hexCode2 = '#';

    for (let i = 0; i < 6; i++) {
      hexCode1 += hexRange[Math.floor(Math.random() * 16)];
      hexCode2 += hexRange[Math.floor(Math.random() * 16)];
    }

    const top = Math.floor(Math.random() * 800);
    const left = Math.floor(Math.random() * 300);

    setBgColor(hexCode1);

    const newShape: Shape = {
      top,
      left,
      id: Date.now(),
      color: hexCode2,
      type: shapeType,
    };

    setShapes(prev => [...prev, newShape]);
  };

  const reset = () => {
    setShapes([]);
    setBgColor('#ffffff');
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
      <View style={[styles.fullscreen, {backgroundColor: bgColor}]}>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.button} onPress={generateBg}>
            <Text style={[styles.buttonText, {color: bgColor}]}>Press me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={[styles.buttonText, {color: bgColor}]}>Reset</Text>
          </TouchableOpacity>
        </View>

        {shapes.map(item => (
          <View
            key={item.id}
            style={[
              item.type === 'square' ? styles.square : styles.circle,
              {
                top: item.top,
                left: item.left,
                borderColor: item.color,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 12,
    backgroundColor: '#FFC107',
    padding: 16,
    elevation: 4,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderRadius: 12,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  circle: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderRadius: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
});
