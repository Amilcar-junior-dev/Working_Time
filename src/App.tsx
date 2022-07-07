import React from 'react';
import {View} from 'react-native';

import Button from './Atomic/Atoms/Button';

const App = () => {
  return (
    <View>
      <Button
        // eslint-disable-next-line no-undef
        onPress={() => onPress()}
        text="Clique em min"
        height={30}
        mt="medium"
      />
    </View>
  );
};

export default App;
function onPress(): void {
  throw new Error('Function not implemented.');
}
