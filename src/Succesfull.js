import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Succesfull = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Image source={require('../src/images/check.png')} style={styles.img}/>
      <Text style={styles.txt}>Your Appointmet Succesfully Booked</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.txt1}>Go To Home Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Succesfull

const styles = StyleSheet.create({
    img : {height:70,width:70,marginBottom:30},
    txt : {fontSize:20,fontWeight:"bold",color:'#0099e6',marginBottom:10},
    txt1 : {fontSize:20,fontWeight:"bold",color:'green'},
})