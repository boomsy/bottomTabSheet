import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Main" component={DrawerNavigation} />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation