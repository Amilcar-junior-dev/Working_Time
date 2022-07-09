import React from 'react';
import {View} from 'react-native';
import {Circle} from './Atomic/Atoms/Box';
import Text from './Atomic/Atoms/Text';
import {themes} from './Styles/themeDefault';
const App = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: '#131313',
        alignItems: 'center',
      }}>
      <Circle
        height="50px"
        width="50px"
        bgColor={themes.SECUNDARY_BASE_03}
        bdRadius="xbig"
        jfContent="center"
        align="center">
        <Text fontSize="small"> </Text>
      </Circle>
    </View>
  );
};

export default App;
