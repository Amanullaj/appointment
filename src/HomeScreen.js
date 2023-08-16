import { FlatList, Image, StatusBar, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState, useMemo } from 'react'
import Header from './Header'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
    const navigation = useNavigation();
    const [fullList, setFullList] = useState([
        { id: 1, name: 'Dr. Roy', speciality: 'Cardiology', },
        { id: 2, name: 'Dr. Jason', speciality: 'Cardiology', },
        { id: 3, name: 'Dr. Luke', speciality: 'Neurology', },
        { id: 4, name: 'Dr. Mohana', speciality: 'Pediatrician', },
        { id: 5, name: 'Dr. Manoj', speciality: 'Orthopedics', },
        { id: 6, name: 'Dr. Shyam', speciality: 'Dermatology', },
        { id: 7, name: 'Dr. Joseph', speciality: 'Orthopedics', },
        { id: 8, name: 'Dr. Susheel', speciality: 'Pediatrician', },
        { id: 9, name: 'Dr. Gopal', speciality: 'Cardiology', },
        { id: 10, name: 'Dr. Sekhar', speciality: 'Neurology', },
        { id: 11, name: 'Dr. Smith', speciality: 'Orthopedics', },
        { id: 12, name: 'Dr. Rao', speciality: 'ENT', }
    ]);

    const [status, setStatus] = useState('NONE')

    const filteredList = useMemo(() => {
        if (status === 'NONE') return fullList
        else {
        return fullList.filter(item => status === item.speciality)
        }
    },
    )

    const onClick = (status) => () => {
        setStatus(status)
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Header />
            <Image source={require('../src/images/doctor.jpg')} style={styles.img} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin:5 }}>
                <Text style={styles.txt}>Select Category</Text>
                <TouchableOpacity onPress={onClick('NONE')}>
                    <Text style={{ color: '#4c669f', fontWeight: 'bold', fontSize: 18 }}> See All</Text>
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={onClick('Cardiology')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                            <Text style={styles.txt2}>Cardiology</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick('Neurology')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                            <Text style={styles.txt2}>Neurology</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick('Pediatrician')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                            <Text style={styles.txt2}>Pediatrician</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick('Orthopedics')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                            <Text style={styles.txt2}>Orthopedics</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick('ENT')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                            <Text style={styles.txt2}>ENT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClick('Dermatology')}>
                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                            <Text style={styles.txt2}>Dermatology</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.txt}>Top Rated Doctors</Text>
                <FlatList
                    numColumns={2}
                    data={filteredList}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.container}>
                                <Image source={require('../src/images/doctor.png')} style={{ height: 50, width: 50 }} />
                                <Text style={styles.txt}>{item.name}</Text>
                                <Text style={styles.txt1}>Specialist : {item.speciality}</Text>
                                <Text style={[styles.txt1, { color: item.speciality == 'Cardiology' ? 'green' : 'red', opacity: item.speciality == 'Cardiology' ? 1 : 0.5 }]}>{item.speciality == 'Cardiology' ? 'Available' : 'Busy'}</Text>
                                <View>
                                    {
                                        item.speciality == 'Cardiology' ?

                                            <TouchableOpacity onPress={() => navigation.navigate('Appointment',{data:item})}>
                                                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient1}>
                                                    <Text style={{ fontSize: 15, color: "white", fontWeight: "500" }}>Book Appointment</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                            :
                                            <LinearGradient colors={['#e6e6e6', '#999999', '#dcdcdc']} style={styles.linearGradient1}>
                                                <Text style={{ fontSize: 15, color: "white", fontWeight: "500" }}>Book Appointment</Text>
                                            </LinearGradient>
                                    }
                                </View>
                            </View>
                        )
                    }} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    img: { height: 200, width: "100%" },
    txt: { fontSize: 20, padding: 5, fontWeight: "bold", color: "black" },
    linearGradient: { height: 60, width: 100, borderRadius: 10, margin: 10, alignItems: "center", justifyContent: "center" },
    container: { flex: 1, borderWidth: 0.5, height: 200, width: 160, padding: 10, margin: 10, borderRadius: 10, alignItems: "center" },
    txt1: { fontSize: 15, fontWeight: "bold", color: "green" },
    txt2: { fontSize: 15, color: "white", fontWeight: "500" },
    linearGradient1: { height: 35, width: 150, borderRadius: 10, margin: 3, alignItems: "center", justifyContent: "center" },
})


