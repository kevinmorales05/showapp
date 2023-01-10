import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native';
import {ticketProps} from '../types/types';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Ticket = ({type, link, img, name, artist, date, hour, status }: ticketProps) => {


  if (type == 'online') {
    return ( <View>
      <TouchableOpacity onPress={()=> Alert.alert(`Go to ${link}`)} style={styles.card}>
        <View>
          <Image source={{uri: img}} style={styles.img} />
        </View>
        <View>
          <Text>{name}</Text>
          <Text>{artist}</Text>
          <Text>{date}</Text>
          <Text>{hour}</Text>
          <Text>{status}</Text>

        </View>
        <AntDesign name="caretright" color="white" size={60} />;
      </TouchableOpacity>
      </View>);
  } else {
    return (<View>
      <TouchableOpacity onPress={()=> Alert.alert("Go to physical event")} style={styles.card}>
         <View>
          <Image source={{uri: img}} style={styles.img} />
        </View>
        <View>
        <View>
          <Text>{name} </Text>
          <Text>{artist} </Text>
          <Text>{date} </Text>
          <Text>{hour} </Text>
          <Text>{status} </Text>
        </View>
        </View>
        
        <AntDesign name="caretright" color="white" size={60} />;
      </TouchableOpacity>
      </ View>
    );
  }
};

export default Ticket;

const styles = StyleSheet.create({
  img: {
    width:100,
    height:100
  },
  card:{
    flexDirection:'row',
  }
});
