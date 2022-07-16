import React from 'react';
import {View} from 'react-native';

import Info from './Atomic/Molecules/info';
const App = () => {
  return (
    <View>
      <Info fDirection="row" bgColor="PRIMARY_BASE_500" height="200px" />
    </View>
  );
};
export default App;
