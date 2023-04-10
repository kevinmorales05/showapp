import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import linking from './deeplinks/linkingConfig';
import {Provider} from 'react-redux';

import {navigationRef} from './RootNavigation';

//screen tracking
import analytics from '@react-native-firebase/analytics';
import {store} from '../rtk/store/store';

const NavContainer: React.FC = () => {
  const routeNameRef = React.useRef(); //referencia del nombre de la ruta

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        linking={linking}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute();
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute();

          if (previousRouteName !== currentRouteName) {
            try {
              await analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName,
              });
              console.log(
                `Added to firebase, previous: ${previousRouteName} current: ${currentRouteName}`,
              );
            } catch (error) {}
          }
          routeNameRef.current = currentRouteName;
        }}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default NavContainer;
