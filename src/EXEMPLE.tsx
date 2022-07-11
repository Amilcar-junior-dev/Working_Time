import React from 'react';
import {View} from 'react-native';
import {Container, Separator} from './Atomic/Atoms/Box';
// import Text from './Atomic/Atoms/Text';
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
      <Container
        height="250px"
        width="250px"
        bgColor={themes.SECUNDARY_BASE_03}
        jfContent="center"
        align="center">
        <Separator />
      </Container>
    </View>
  );
};

export default App;
