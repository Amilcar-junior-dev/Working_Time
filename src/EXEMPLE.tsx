import React from 'react';
import {View} from 'react-native';
import {Header} from './Atomic/Atoms/Box';
import {themes} from './Styles/themeDefault';
const App = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: '#131313',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Header
        height="100px"
        width="100%"
        bgColor={themes.SECUNDARY_BASE_03}
        bdRadius="normal"
      />
    </View>
  );
};

export default App;
