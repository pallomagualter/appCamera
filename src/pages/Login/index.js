import React, { useState } from 'react';
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity } from 'react-native';
//AsyncStore Ã© um banco real (SQLite) que utilizamos no Native
import api from '../../services/api';

import logo from '../../assets/logo.png';

import styles from './styles';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event) {
        event. preventDefault();

        try {
            const response = await api.post('sessions', { email, senha });  

            await AsyncStorage.setItem('id_usuario', response.data._id);
            await AsyncStorage.setItem('nome_guerra_usuario', response.data.nome_guerra_usuario);
            

            navigation.navigate('Home');

            console.log(response.data);
            console.log(email, senha);

            }   catch (err) {
                alert('Falha no login, tente novamente.');
                }
    }

    return( 
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail *"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha *"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                   
                />
                 
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}} style={styles.buttonNewAccount}>
                    <Text style={styles.buttonTextNewAccount}>Create free new account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
        
        
    );
}