import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './Header'
import LinearGradient from 'react-native-linear-gradient';
import Navigation from './Navigation';
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Header />
            <Image source={require('../src/images/doctor.jpg')} style={styles.img} />
            <Text style={styles.txt}>Select Category</Text>
            <View>
                <FlatList
                    data={[1, 1, 1, 1, 1, 1, 1]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <TouchableOpacity >
                                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                                        <Text style={{fontSize:15,color:"white",fontWeight:"500"}}>Category {index + 1}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
            <Text style={styles.txt}>Top Rated Doctors</Text>
            <FlatList 
            numColumns={2}
            data = {[1,1,1,1,1,1]}
            renderItem={({item, index}) =>{
                return(
                    <View style={styles.container}>
                        <Image source={require('../src/images/doctor.png')} style={{height:50,width:50}}/>
                    <Text style={styles.txt}>Doctor{index+1}</Text>
                    <Text style={styles.txt1}>Specialist</Text>
                    <Text style={[styles.txt1,{color: index == 0 ? 'green' : 'red', opacity: index == 0 ? 1 : 0.5}]}>{index == 0? 'Available' : 'Busy'}</Text>
                    <View>
                        {
                            index == 0? 
                        
                                <TouchableOpacity onPress={()=>navigation.navigate('Appointment')}>
                                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient1}>
                                        <Text style={{fontSize:15,color:"white",fontWeight:"500"}}>Book Appointment</Text>
                                    </LinearGradient>
                                </TouchableOpacity> 
                                :  
                                <LinearGradient colors={['#e6e6e6', '#999999', '#dcdcdc']} style={styles.linearGradient1}>
                                        <Text style={{fontSize:15,color:"white",fontWeight:"500"}}>Book Appointment</Text>
                                </LinearGradient>
                        }
                            </View>
                    </View>
                )
            }}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    img: { height: 200, width: "100%" },
    txt: { fontSize: 20, padding: 5, fontWeight: "bold", color: "black" },
    linearGradient: { height: 70, width: 100, borderRadius: 10, margin: 15, alignItems: "center", justifyContent: "center" },
    container : {flex:1, borderWidth:0.5,height:200,width:160,padding:10,margin:10,borderRadius:10,alignItems:"center"},
    txt1: { fontSize: 20, fontWeight: "bold", color: "green" },
    linearGradient1: { height: 35, width: 150, borderRadius: 10, margin: 3, alignItems: "center", justifyContent: "center" },
})