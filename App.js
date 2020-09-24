import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image />
      </View>
       <Text style={styles.textContainer}>Hi, baby!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
