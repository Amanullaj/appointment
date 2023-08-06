import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import Slots from './Slots';


const BookAppointment = ({navigation}) => {
    const  data = [
        "10:00-10:30AM",
        "10:30-11:00AM",
        "11:00-11:30AM",
        "11:30-12:00PM",
        "12:00-12:30PM",
        "12:30-01:00PM" ];
    const [selectedSlot, setSelectedSlot] = useState(-1);
    const [selectedDay, setSelectedDay] = useState(-1);
    const [days, setDays] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
      DaysList = [];
      for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
        DaysList.push({day: i, selected: false});
      }
      setDays(DaysList);
    }, []);
    const getDays = month => {
      let days = 0;
      if (month == 1) {
        days = 31;
      } else if (month == 2) {
        days = 28;
      } else if (month == 3) {
        days = 31;
      } else if (month == 4) {
        days = 30;
      } else if (month == 5) {
        days = 31;
      } else if (month == 6) {
        days = 30;
      } else if (month == 7) {
        days = 31;
      } else if (month == 8) {
        days = 31;
      } else if (month == 9) {
        days = 30;
      } else if (month == 10) {
        days = 31;
      } else if (month == 11) {
        days = 30;
      } else if (month == 12) {
        days = 31;
      }
      return days;
      };
  return (
    <View style={{flex:1}}>
    <View style={styles.main}>
      <Image source={require('../src/images/doctor.png')} style={styles.img}/>
    </View>
    <Text style={styles.txt1}>Dr. Jack</Text>
    <Text style={styles.txt2}>Specialist</Text>
    <View>
        <TouchableOpacity onPress={()=>setShow(!show)} style={styles.btn}>
        <Text style={styles.txt3}>Select Date</Text>
        </TouchableOpacity>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedDay == index ? 'blue' : 'white',
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {
                    } else {
                      setSelectedDay(index);
                    }
                  }}>
                  <Text style={{color: selectedDay == index ? '#fff' : 'blue'}}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
    </View>
   {
    show ? <Slots /> : null
   }
      </View>
  )
}

export default BookAppointment

const styles = StyleSheet.create({
    img : {height:75,width:75},
    main : {height:100,width:100,borderWidth:0.5,borderRadius:50,alignItems:"center",justifyContent:"center",marginTop:50,marginLeft:150,backgroundColor:"#4c669f"},
    txt1 : {fontSize:20,color:"black",textAlign:"center",fontWeight:"bold"},
    txt2 : {fontSize:20,color:"green",textAlign:"center"},
    txt3 : {fontSize:20,color:"white",fontWeight:"bold",padding:10},
    container : {flex:1,height:50,width:150,borderWidth:1,borderRadius:10,margin:10,alignItems:"center",justifyContent:"center"},
    btn : {height:50,width:150,borderWidth:0.5,borderRadius:10,alignItems:"center",marginLeft:120,justifyContent:"center",backgroundColor:"#4c669f",marginBottom:20,marginTop:20}
})