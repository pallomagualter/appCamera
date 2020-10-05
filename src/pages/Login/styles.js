import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',    
    },

    form: {
        alignSelf: 'stretch', //para ocupar a largura inteira
        paddingHorizontal: 30, //propiedade apenas do native é padding apenas na horizontal
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 18,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
        backgroundColor: '#fff',
    },

    button: {
        height: 42,
        backgroundColor: '#2CBF9A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
     
     },
 
     buttonText: {
         color: '#121212',
         fontWeight: 'bold',
         fontSize: 18,
     },

     buttonNewAccount: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
     
     },
 
     buttonTextNewAccount: {
        fontFamily: 'Archivo',
        color: '#ffff',
        fontSize: 18,
     },

     footer: {
        marginTop: 42,
     },
 

});