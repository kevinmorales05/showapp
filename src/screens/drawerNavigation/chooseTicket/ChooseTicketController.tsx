import React from 'react';

import ChooseTicketScreen from './ChooseTicketScreen';
interface Props extends DrawerScreenProps<any, any> {}

const ChooseTicketController = ({navigation, route}: Props) => {
  return (
    <>
      <ChooseTicketScreen route={route} navigation={navigation} />
    </>
  );
};

export default ChooseTicketController;
