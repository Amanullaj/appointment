import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import BookAppointment from './BookAppointment';
import Succesfull from './Succesfull';
import SignUp from './SignUp';
import Login from './Login';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} />
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='Appointment' component={BookAppointment} />
        <Stack.Screen name='Succesfull' component={Succesfull} options={{headerShown:false}} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})