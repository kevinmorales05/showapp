import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import linking from './deeplinks/linkingConfig';

import {navigationRef} from './RootNavigation';

//screen tracking
import analytics from '@react-native-firebase/analytics';

const NavContainer: React.FC = () => {
  const routeNameRef = React.useRef(); //referencia del nombre de la ruta

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          

          try {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          console.log(`Added to firebase, previous: ${previousRouteName} current: ${currentRouteName}`)
          } catch (error) {
            
          }
        }
        routeNameRef.current = currentRouteName;
      }}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default NavContainer;
