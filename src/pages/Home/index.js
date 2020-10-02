import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Home({ navigation }) {
    const user_name = 'Palloma Gualter';
    //const user_name = AsyncStorage.getItem('nome_guerra_usuario');

    function handleTakePhoto(){
        navigation.navigate('TakePhoto');
        
    }

    function handleLogout(){
        AsyncStorage.clear();  //limpar todo o localStorage
       
        navigation.navigate('Login'); // enviar de volta para rota raiz, rota de login
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source= {logo} />
                <TouchableOpacity onPress={handleLogout} style={styles.buttonSair}> 
                    <Feather name="log-out" size={28} color="#fff"/>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Image style={styles.user} source={{uri:'https://avatars2.githubusercontent.com/u/33058536?s=460&u=bc3bdf38003f317058c59880c9f9b73f7c76c0ef&v=4'}} />
                
                <Text style={styles.headerText}>Hi, {user_name} </Text>
            
                <TouchableOpacity onPress={handleTakePhoto} style={styles.button} >
                    <Text style={styles.buttonText}>TAKE A PHOTO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
