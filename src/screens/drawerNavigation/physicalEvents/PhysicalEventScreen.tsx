import React from 'react'
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PhysicalEventScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', marginRight: 20}}
        onPress={() => navigation.navigate('Home')}>
        <AntDesign name="closecircleo" color={'black'} size={30} />
      </TouchableOpacity>
        <Text>Physical Events</Text>
    </SafeAreaView>
  )
}

export default PhysicalEventScreen;