import React, { useEffect } from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MyAccountScreen from './MyAccountScreen'
import { DrawerScreenProps } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';

interface Props extends DrawerScreenProps<any, any>{};


const MyAccountController = ({navigation}:Props) => {

  
  return (
    <SafeAreaView>
        <MyAccountScreen />
    </SafeAreaView>
  )
}

export default MyAccountController