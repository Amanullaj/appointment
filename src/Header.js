import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Header = () => {
  return (
    <View style={styles.main}>
      <Image source={require('../src/images/stethoscope.png')} style={styles.img}/>
      <Text style={styles.txt}>Doctor App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    img : {height:30,width:30,},
    main : {backgroundColor:"white",flexDirection:"row",alignItems:"center",paddingLeft:20},
    txt : {fontSize:25,color:"black",paddingLeft:10,}
})