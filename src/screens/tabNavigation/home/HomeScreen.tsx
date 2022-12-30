import {View, Text, SafeAreaView, TouchableHighlight, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import Card from '../../../components/eventCard/Card';
import {event} from '../../../components/types/types';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native'
import { moderateScale } from '../../../utils/scaleMetrics';
import Entypo from 'react-native-vector-icons/Entypo';


function HomeScreen({eventsList, navigation}) {
  console.log(eventsList);
  
  
  return (
    <SafeAreaView>
      <View style={styles.optionsBlock}>
        <TouchableHighlight style={styles.option}>
          <Text style={styles.optionText}>Virtual</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.option}>
          <Text style={styles.optionText} >Physical</Text>
        </TouchableHighlight>
      </View>

      <ScrollView style={{backgroundColor:'#6C141B', display:'flex', marginBottom:50}}>
        {eventsList.map((event: event) => {
          return (
            <Card
              img={event.img}
              id={event.id}
              cost={event.cost}
              type={event.type}
              description={event.description}
              artist={event.artist}
              city={event.city}
              date={event.date}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  optionsBlock:{
    display:'flex',
     flexDirection:'row', 
     justifyContent:'center',
     backgroundColor:'#6C141B'
  },
  option:{
    marginHorizontal:5,
    marginVertical:7,
    padding:3,
    borderColor:'blue',
    backgroundColor:'black',
    borderRadius:5,
    width: moderateScale(90)
  },
  optionText:{
    color:'white',
    textAlign:'center',
    fontSize:14
  }
});