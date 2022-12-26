import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStack from './TabStack';
import OnlineEventsController from '../../screens/drawerNavigation/onlineEvents/OnlineEventsController';
import PhysicalEventScreen from '../../screens/drawerNavigation/physicalEvents/PhysicalEventScreen';

const Drawer = createDrawerNavigator();



const DrawerStack = () => {
  
  return (
     <Drawer.Navigator
     screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
      },
      headerShown: false

    }
   
  }
  
     >
        <Drawer.Screen name="Home" component={TabStack} />
        <Drawer.Screen name="Online Event" component={OnlineEventsController} />
        <Drawer.Screen name="Event" component={PhysicalEventScreen} />
     </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DrawerStack;
