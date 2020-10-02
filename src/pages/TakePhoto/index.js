import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function TakePhoto({ navigation }) {
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
  
      (async () => {
        const { status }= await Permissions.askAsync(Permissions.CAMERA_ROLL);
        //console.log(status);
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
        setOpen(true); //confirmando que há foto
        console.log(data); 
      }
    }
  
    async function savePicture() {
      const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert('Salva com sucesso!');
      })
      .catch(error => {
        console.log('err', error);
      })
    }

    function handleHome(){
      navigation.navigate('Home');
      
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <Camera
            style={{ flex: 1 }}
            type={type}
            ref={camRef} //faz referência a camera do celular
        >
          <View style={styles.header}>
            <Image style={styles.logo} source= {logo} />
            <TouchableOpacity onPress={handleHome}> 
                <Feather name="arrow-left" size={42} color="#fff"/>
            </TouchableOpacity>
          </View>

            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
            <TouchableOpacity
                style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                flexDirection: 'row',
                marginHorizontal: 20,
                }}
                onPress={ () => {
                setType(
                    type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
                }}
            >
                <Feather name="refresh-cw" size={24} color="#fff"/>
                <Text style={{ fontSize: 24, marginBottom: 13, color: '#fff', fontWeight: 'bold', marginLeft: 10 }}>
                    Trocar
                </Text>
            </TouchableOpacity>
            </View>
        </Camera>

        <TouchableOpacity style={styles.button} onPress={ takePicture} >
            <FontAwesome name= "camera" size={23} color="#fff" />
        </TouchableOpacity>

        { capturedPhoto && //se esse capturedPhoto existir então abrirá o modal
            <Modal
            animationType="slide"
            transparent={false}
            visible={open}
            >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 

                <View style={{ margin: 10, flexDirection: 'row' }}>
                <TouchableOpacity style={{ margin: 10}} onPress={ () => setOpen(false) }>
                    <FontAwesome name="window-close" size={50} color="#ff0000" />
                </TouchableOpacity>

                <TouchableOpacity style={{ margin: 10}} onPress={ savePicture }>
                    <FontAwesome name="upload" size={50} color="#121212" />
                </TouchableOpacity>
                </View>
                <Image 
                style={{ width: '100%', height: 450, borderRadius: 20 }}
                source={{ uri: capturedPhoto }}
                />

            </View>
            </Modal>
        }
      </SafeAreaView>
    );
}
  