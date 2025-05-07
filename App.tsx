import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  type Shape = {
    top: number;
    left: number;
    id: number;
    color: string;
    angle: number;
    type: 'square' | 'circle' | 'triangle' | 'diamond' | 'ellipse';
  };

  const [bgColor, setBgColor] = useState('#ffffff');
  const [shapes, setShapes] = useState<Shape[]>([]);

  const generateBg = () => {
    const shapeType = ['square', 'circle', 'triangle', 'diamond', 'ellipse'][
      Math.floor(Math.random() * 5)
    ] as Shape['type'];

    const hexRange = '0123456789abcdef';
    let hexCode1 = '#';
    let hexCode2 = '#';

    for (let i = 0; i < 6; i++) {
      hexCode1 += hexRange[Math.floor(Math.random() * 16)];
      hexCode2 += hexRange[Math.floor(Math.random() * 16)];
    }
    let top: number = 0;
    do {
      top = Math.floor(Math.random() * 800);
    } while (top > 300 && top < 500);
    const left = Math.floor(Math.random() * 300);

    const angle = Math.floor(Math.random() * 180);

    setBgColor(hexCode1);

    const newShape: Shape = {
      top,
      left,
      id: Date.now(),
      color: hexCode2,
      angle,
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
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={[styles.fullscreen, {backgroundColor: bgColor}]}>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.button} onPress={generateBg}>
            <Text style={[styles.buttonText, {color: bgColor}]}>Press me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={reset}>
            <Text style={[styles.buttonText, {color: bgColor}]}>Reset</Text>
          </TouchableOpacity>
        </View>
        {shapes.map(item => {
          if (item.type === 'triangle') {
            return (
              <View
                key={item.id}
                style={[
                  styles.triangle,
                  {
                    top: item.top,
                    left: item.left,
                    borderBottomColor: item.color,
                    transform: [{rotate: `${item.angle} deg`}],
                  },
                ]}
              />
            );
          }
          if (item.type === 'ellipse') {
            return (
              <View
                key={item.id}
                style={[
                  styles.ellipse,
                  {
                    top: item.top,
                    left: item.left,
                    borderColor: item.color,
                    transform: [{rotate: `${item.angle} deg`}],
                  },
                ]}
              />
            );
          }
          if (item.type === 'diamond') {
            return (
              <View
                key={item.id}
                style={[
                  styles.diamond,
                  {
                    top: item.top,
                    left: item.left,
                    borderColor: item.color,
                    transform: [{rotate: `${item.angle} deg`}],
                  },
                ]}
              />
            );
          }

          return (
            <View
              key={item.id}
              style={[
                item.type === 'square' ? styles.square : styles.circle,
                {
                  top: item.top,
                  left: item.left,
                  borderColor: item.color,
                  transform: [{rotate: `${item.angle} deg`}],
                },
              ]}
            />
          );
        })}
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
    alignItems: 'center',
    flexWrap: 'wrap',
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
  triangle: {
    width: 0,
    height: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
  },
  diamond: {
    width: 100,
    height: 100,
    borderWidth: 4,
    backgroundColor: 'transparent',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    borderColor: 'black',
  },
  ellipse: {
    width: 120,
    height: 70,
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
});
