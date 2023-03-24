import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStack from './stacks/DrawerStack';
import AuthStack from './stacks/AuthStack';

const Stack = createNativeStackNavigator<any>();

const AppNavigator: any = () => {
  const [isLogged, setisLogged] = useState(true);
  /**
   * Manages stack navigation based on logged user.
   */
  if (isLogged === true) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
    );
    
  }
};

export default AppNavigator;
