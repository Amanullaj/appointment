import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },3000);
    },[]);
  return (
    <View style={{alignItems:"center",backgroundColor:"blue"}}>
        <StatusBar backgroundColor={'blue'} barStyle={'light-content'}/>
      <LottieView source={require('../src/images/animation.json')} autoPlay loop style={styles.img}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    img : {height:800,width:600}
})