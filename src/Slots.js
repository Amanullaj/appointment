import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import { useNavigation } from '@react-navigation/native';


const Slots = () => {
  const navigation = useNavigation();
    const [selectedSlot, setSelectedSlot] = useState('');
    const  data = [
        "10:00-10:30AM",
        "10:30-11:00AM",
        "11:00-11:30AM",
        "11:30-12:00PM",
        "12:00-12:30PM",
        "12:30-01:00PM" ];
  return (
    <View>
      <Text style={styles.txt3}>Available Slots</Text>
    <FlatList 
    numColumns={2}
    data={data}
    keyExtractor={({item, index})=> index }
    renderItem={({item, index})=>{
            return(
            <View style={[styles.container,{borderColor: selectedSlot == index ? "blue" : "black"}]}>
            <TouchableOpacity onPress={()=> {setSelectedSlot(index)}}>
                 <Text style={{color: selectedSlot == index ? "blue" : "black"}}>{item}</Text>
            </TouchableOpacity>
            </View>
             
            )
        }}
    />
    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Succesfull')}>
        <Text style={{fontSize:20,color:"white"}}>Book Now</Text>
    </TouchableOpacity> 
    </View>
  )
}

export default Slots

const styles = StyleSheet.create({
  txt3 : {fontSize:20,color:"black",fontWeight:"bold",padding:10},
  container : {flex:1,height:50,width:150,borderWidth:1,borderRadius:10,margin:10,alignItems:"center",justifyContent:"center"},
  btn : {height:50,width:150,borderWidth:0.5,borderRadius:10,alignItems:"center",marginLeft:120,justifyContent:"center",backgroundColor:"#4c669f",marginBottom:20}
})