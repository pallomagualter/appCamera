import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes(){
    return(
        <NavigationContainer>

          <AppStack.Navigator screenOptions={{ headerShown: false}}>
            <AppStack.Screen name="Login" component={Login}/>
            <AppStack.Screen name="Home" component={Home} />
                        
          </AppStack.Navigator>
        </NavigationContainer>
    )

}

/*
 createStackNavigator é para navegação em pilha, enquanto uma tela está ativa existe várias ativas ao mesmo tempo.
 createSwitchNavigator só uma tela ficará tiva por vez, o usuário não poderá voltar para tela anterior.