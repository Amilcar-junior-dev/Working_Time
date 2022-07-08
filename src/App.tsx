import React from 'react';
import {View} from 'react-native';
import {themes} from './Styles/themeDefault';

import Button from './Atomic/Atoms/Button';
import Text from './Atomic/Atoms/Text';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}>
      <Button
        // eslint-disable-next-line no-undef
        onPress={() => onPress()}
        text="Hello Word"
        height="30px"
        width="80px"
        mt="smaller"
      />
      <Text fontSize="xxbig" color={themes.SECUNDARY_BASE_05}>
        {' '}
        Hello Word
      </Text>
    </View>
  );
};

export default App;
function onPress(): void {
  throw new Error('Function not implemented.');
}
