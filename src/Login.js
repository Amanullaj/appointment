import { StyleSheet, Text, View , StatusBar,TouchableOpacity,Image,TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const saveData = () => {
         auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            Alert.alert('User Logged in')
            
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
             //   Alert.alert('That email address is already in use!')
               
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert('That email address is invalid!')
               
            }

            console.error(error);
        })
      navigation.navigate('Splash')
    }
    // const userSignin = () => {
    //     auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(res => {
    //         Alert.alert('User Logged in')
    //     })
    //     .catch(error => {
    //         Alert.alert('User not created or Given credentials are wrong')
           
    //     })
    // }
  return (
    <View style={{flex:1,backgroundColor:'#4c669f'}}>
    <StatusBar backgroundColor={'#4c669f'}/>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Image source={require('../src/images/back.png')} style={styles.img}/>
    </TouchableOpacity>
    <Image source={require('../src/images/online.png')} style={styles.img1}/>
    <View style={styles.contain}>
        <Text style={styles.txt1}>Email Address</Text>
        <TextInput placeholder='Enter Email ID' style={styles.input}
        value={email} onChangeText={(text)=>setEmail(text)}/>
        <Text style={styles.txt}>Password</Text>
        <TextInput placeholder='Password' secureTextEntry style={styles.input} 
        value={password} onChangeText={(text)=>setPassword(text)}/>
        <TouchableOpacity>
        <Text style={{textAlign:'right',padding:10,color:'black'}}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input1} onPress={()=>saveData()}> 
            <Text style={styles.txt2}>Login</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default Login

const styles = StyleSheet.create({
    img : {height:40,width:40,margin:20,},
    img1 : {height:200,width:200,marginLeft:100},
    txt : {fontSize:20,color:'black',margin:10},
    txt2 : {fontSize:20,color:'black'},
    txt1 : {fontSize:20,color:'black',paddingTop:20,margin:10},
    input : {height:50,width:350,padding:10,borderRadius:20,backgroundColor:'#F0F0F0'},
    input1 : {height:50,width:350,padding:10,borderRadius:20,backgroundColor:'#ffcc00',justifyContent:'center',alignItems:'center',marginTop:20},
    btn : {height:50,width:300,borderRadius:20,backgroundColor:'#ffcc00',marginLeft:50,alignItems:'center',justifyContent:'center',marginTop:50},
    contain : {backgroundColor:'white',padding:20,marginTop:20,borderTopLeftRadius:40,borderTopRightRadius:40,height:500}
})