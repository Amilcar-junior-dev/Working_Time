import React from 'react';
import {View} from 'react-native';

import Button from './Atomic/Atoms/Button';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        // eslint-disable-next-line no-undef
        onPress={() => onPress()}
        text="Clique em min"
        height="30px"
        width="80px"
        padding="big"
      />
    </View>
  );
};

export default App;
function onPress(): void {
  throw new Error('Function not implemented.');
}
