import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';


const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const saveData = () => {
        if(!name && !email && !password) {
            Alert.alert("Please fill all the fields");
        } else {
            Alert.alert("SignUP Succesfull  ");
            navigation.navigate('Login');
        }
          firestore()
            .collection('Users')
            .add({
                name: name,
                email: email,
                password: password,
            })
            .then(() => {
                console.log('User added!');
            });
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#4c669f' }}>
            <StatusBar backgroundColor={'#4c669f'} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../src/images/back.png')} style={styles.img} />
            </TouchableOpacity>
            <Image source={require('../src/images/online.png')} style={styles.img1} />
            <View style={styles.contain}>
                <Text style={styles.txt1}>Full Name</Text>
                <TextInput placeholder='Enter Name' style={styles.input}
                    value={name} onChangeText={(text) => setName(text)} />
                <Text style={styles.txt}>Email Address</Text>
                <TextInput placeholder='Enter Email ID' style={styles.input}
                    value={email} onChangeText={(text) => setEmail(text)} />
                <Text style={styles.txt}>Password</Text>
                <TextInput placeholder='Password' secureTextEntry style={styles.input}
                    value={password} onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity style={styles.input1} onPress={() => saveData()}>
                    <Text style={styles.txt2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    img: { height: 40, width: 40, margin: 20, },
    img1: { height: 200, width: 200, marginLeft: 100 },
    txt: { fontSize: 20, color: 'black', margin: 10 },
    txt2: { fontSize: 20, color: 'black' },
    txt1: { fontSize: 20, color: 'black', paddingTop: 20, margin: 10 },
    input: { height: 50, width: 350, padding: 10, borderRadius: 20, backgroundColor: '#F0F0F0' },
    input1: { height: 50, width: 350, padding: 10, borderRadius: 20, backgroundColor: '#ffcc00', justifyContent: 'center', alignItems: 'center', marginTop: 30 },
    btn: { height: 50, width: 300, borderRadius: 20, backgroundColor: '#ffcc00', marginLeft: 50, alignItems: 'center', justifyContent: 'center', marginTop: 50 },
    contain: { backgroundColor: 'white', padding: 20, marginTop: 20, borderTopLeftRadius: 40, borderTopRightRadius: 40, height: 500 }
})