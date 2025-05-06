import {
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View>
        <TouchableOpacity style={[styles.container]}>
          <View>
            <Text>Press me</Text>
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
});
