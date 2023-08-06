import { StyleSheet, Text, View , StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#4c669f'}}>
        <StatusBar backgroundColor={'#4c669f'}/>
      <Text style={styles.txt}>Let's Get Started!</Text>
      <LottieView source={require('../src/images/animation2.json')} autoPlay loop style={styles.img}/>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('SignUp')}>
      <Text style={styles.txt1}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.contain}>
      <Text style={{color:'white'}}>Already have an account?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={{color:'#ffcc00'}}>  Log In</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    img : {height:400,width:400},
    txt : {fontSize:35, fontWeight:'bold',color:'white',textAlign:'center',paddingTop:70},
    txt1 : {fontSize:20, fontWeight:'bold',color:'black'},
    btn : {height:50,width:300,borderRadius:20,backgroundColor:'#ffcc00',marginLeft:50,alignItems:'center',justifyContent:'center',marginTop:50},
    contain : {flexDirection:'row',justifyContent:'center',paddingTop:20}
})