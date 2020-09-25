import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back); //Aqui iremos definir se o app irá iniciar utilizando a camera frontal ou back, definindo assim o tipo
  const [hasPermission, setHasPermission] = useState(null); //Para armazenar o estado da permissão de utilização da camera

  useEffect(() => { //quando ele abrir pela primeira vez ele dispara uma ação para o usuário permitir a utilização da câmera
    (async () => {
      const { status }= await Camera.requestPermissionsAsync(); //Pegando o status e salvando a useState
      setHasPermission(status === 'granted'); //Aqui ele irá pegar essa permissão e armazenar como permitido
    })();
  }, []);

  if(hasPermission === null){
    return <View />
  }
  
  if(hasPermission === false){
    return <Text>Acesso Negado!</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});