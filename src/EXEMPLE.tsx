import React from 'react';
import {View} from 'react-native';
import Information from './Atomic/Molecules/information';
const App = () => {
  return (
    <View>
      <Information
        height="200px"
        width="100%"
        fDirection="row"
        bgColor="PRIMARY_BASE_500"
      />
    </View>
  );
};
export default App;
