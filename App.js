import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { Camera } from 'expo-camera';

export default function App() {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back); //Aqui iremos definir se o app irá iniciar utilizando a camera frontal ou back, definindo assim o tipo
  const [hasPermission, setHasPermission] = useState(null); //Para armazenar o estado da permissão de utilização da camera
  const [capturedPhoto, setCapturedPhoto] = useState(null); //Armazena a foto capturada a uri
  const [open, setOpen] = useState(false); 

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

  async function takePicture(){
    if(camRef){ //primeiro verifica se há uma camera
      const data = await camRef.current.takePictureAsync(); //salva os dados da camera
      setCapturedPhoto(data.uri);
      console.log(data); 
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={camRef} //faz referência a camera do celular
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={ () => {
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              );
            }}
          >
              <Feather name="refresh-cw" size={23} color="#fff"/>
              <Text style={{ fontSize: 20, marginBottom: 13, color: '#fff', fontWeight: 'bold' }}>
                Trocar
              </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={ takePicture} >
        <FontAwesome name= "camera" size={23} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    margin: 20,
    height: 50,
  },
});