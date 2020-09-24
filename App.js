import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back); //Aqui iremos definir se o app irá iniciar utilizando a camera frontal ou back, definindo assim o tipo
  const [hasPermission, setHasPermission] = useState(null); //Para armazenar o estado da permissão de utilização da camera

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted'); //Aqui ele irá pegar essa permissão e armazenar como permitido
    })
  }, []);

  if(hasPermission === null){
    return <View />
  }

  if(hasPermission === false){
    return <Text>Acesso negado!</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Camera
        style={{ flex: 1  }}
        type={type}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
