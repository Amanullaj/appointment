import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,Modal,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Slots from './Slots';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';


const BookAppointment = ({ navigation }) => {

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState('');
  const route = useRoute();
 
  return (
    <View style={{ flex: 1 }}>
       <ScrollView>
      <View style={styles.main}>
      
        <Image source={require('../src/images/doctor.png')} style={styles.img} />
      </View>
      <Text style={styles.txt1}>{route.params.data.name}</Text>
      <Text style={styles.txt2}>{route.params.data.speciality}</Text>
      <View>
         <Text style={styles.txt3}>Select Date</Text>
       <View>         
            <Calendar style={{elevation:5,margin:10}}
              onDayPress={day =>{ 
                setSelected(day.dateString)
                setShow(true)
                setShowModal(false)}} 
                
                minDate='2023-08-14'
                maxDate='2023-09-30'
                markedDates={{
                  [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
                />
        
        </View>
      </View>
      {
        show ? <Slots /> : null
      }
       </ScrollView>
    </View>
  )
}

export default BookAppointment

const styles = StyleSheet.create({
  img: { height: 75, width: 75 },
  main: { height: 100, width: 100, borderWidth: 0.5, borderRadius: 50, alignItems: "center", justifyContent: "center", marginTop: 20, marginLeft: 150, backgroundColor: "#4c669f" },
  txt1: { fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold" },
  txt2: { fontSize: 20, color: "green", textAlign: "center" },
  txt3: { fontSize: 20, color: "blue", fontWeight: "bold", padding: 10 },
  container: { flex: 1, height: 50, width: 150, borderWidth: 1, borderRadius: 10, margin: 10, alignItems: "center", justifyContent: "center" },
  btn: { height: 50, width: 150, borderWidth: 0.5, borderRadius: 10, alignItems: "center", marginLeft: 120, justifyContent: "center", backgroundColor: "#4c669f", marginBottom: 20, marginTop: 20 }
})