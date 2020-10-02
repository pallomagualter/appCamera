import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#121212',    
    },

    logo: {
        height: 42,
        resizeMode: "contain",
        alignSelf: 'center',
    },

    content:{
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    header: {
        flexDirection: 'row', //colar um do lado do outro
        justifyContent: 'space-between',
        alignItems: 'center',
    },
        
    button: {
        marginTop: 42,
        height: 56,
        width: 256,
        backgroundColor: '#2CBF9A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
     
    },
 
    buttonText: {
        color: '#ffffff',//'#121212',
        fontWeight: 'bold',
        fontSize: 20,
     },

    headerText:{
        textAlign: "center",
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },

    user: {
        marginBottom: 16,
        height: 97,
        resizeMode: "contain",
        alignSelf: 'center',
        borderRadius: 100,
    }

});