import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#121212',  
  
  },

  logo: {
    height: 42,
    resizeMode: "contain",
    alignSelf: 'center',
  },

  header: {
      marginTop: 26,
      marginHorizontal:10,
      flexDirection: 'row', //colar um do lado do outro
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    margin: 20,
    height: 30,
  },  
});