import React, {useEffect, type PropsWithChildren} from 'react';

import {
  requestUserPermission,
  NotificationListener,
} from './utils/notifications_helper';

import NavContainer from './navigation/NavContainer';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);

  return <NavContainer />;
};

export default App;
