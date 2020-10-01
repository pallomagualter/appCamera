import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Home({ navigation }) {
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
                <Image style={styles.user} source= {logo} />
                <Text style={styles.headerText}>Olá, José da Silva </Text>
            
                <TouchableOpacity onPress={handleTakePhoto} style={styles.button} >
                    <Text style={styles.buttonText}>TAKE A PHOTO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
