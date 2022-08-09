import React from 'react';
import {View} from 'react-native';

import Header from './Atomic/Molecules/Header';
import TimeBalance from './Atomic/Molecules/timeBalance';
import Info from './Atomic/Molecules/info';
const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#131313'}}>
      <Header
        height="100px"
        width="100%"
        bgColor="PRIMARY_BASE_800"
        mb="nano"
        fDirection="row"
      />
      <TimeBalance bgColor="PRIMARY_BASE_700" bdRadius="normal" width="95%" />
      <Info
        fDirection="row"
        bgColor="PRIMARY_BASE_800"
        height="200px"
        width="97%"
        mt="smaller"
        bdRadius="normal"
      />
    </View>
  );
};
export default App;
