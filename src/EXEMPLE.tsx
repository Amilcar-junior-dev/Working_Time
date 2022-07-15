import React from 'react';
import {View} from 'react-native';
import {BoxInformation, Container} from './Atomic/Atoms/Box';
import Text from './Atomic/Atoms/Text';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <BoxInformation
        height="200px"
        width="100%"
        bgColor="PRIMARY_BASE_600"
        fDirection="row">
        <Container height="100%" width="50%" bgColor="ALERTY_BASE_800">
          <Container
            height="20%"
            width="100%"
            bgColor="SECUNDARY_BASE_02"
            fDirection="row">
            <Container
              height="100%"
              width="20%"
              align="center"
              jfContent="center"
              bgColor="SECUNDARY_BASE_07">
              <Text> ICONE </Text>
            </Container>
            <Container
              height="100%"
              width="100%"
              align="flex-start"
              jfContent="center"
              bgColor="PRIMARY_BASE_600">
              <Text fontSize="average"> Início Expediente: 00:00</Text>
            </Container>
          </Container>
          <Container
            height="20%"
            width="100%"
            bgColor="SECUNDARY_BASE_02"
            fDirection="row">
            <Container
              height="100%"
              width="20%"
              align="center"
              jfContent="center"
              bgColor="SECUNDARY_BASE_07">
              <Text> ICONE </Text>
            </Container>
            <Container
              height="100%"
              width="100%"
              align="flex-start"
              jfContent="center"
              bgColor="PRIMARY_BASE_600">
              <Text fontSize="average"> Almoço: 00:00</Text>
            </Container>
          </Container>
          <Container
            height="20%"
            width="100%"
            bgColor="SECUNDARY_BASE_02"
            fDirection="row">
            <Container
              height="100%"
              width="20%"
              align="center"
              jfContent="center"
              bgColor="SECUNDARY_BASE_07">
              <Text> ICONE </Text>
            </Container>
            <Container
              height="100%"
              width="100%"
              align="flex-start"
              jfContent="center"
              bgColor="PRIMARY_BASE_600">
              <Text fontSize="average"> Retorno: 00:00</Text>
            </Container>
          </Container>
          <Container
            height="20%"
            width="100%"
            bgColor="SECUNDARY_BASE_02"
            fDirection="row">
            <Container
              height="100%"
              width="20%"
              align="center"
              jfContent="center"
              bgColor="SECUNDARY_BASE_07">
              <Text> ICONE </Text>
            </Container>
            <Container
              height="100%"
              width="100%"
              align="flex-start"
              jfContent="center"
              bgColor="PRIMARY_BASE_600">
              <Text fontSize="average"> Final Expediente: 00:00</Text>
            </Container>
          </Container>
          <Container
            height="20%"
            width="100%"
            bgColor="SECUNDARY_BASE_02"
            fDirection="row">
            <Container
              height="100%"
              width="20%"
              align="center"
              jfContent="center"
              bgColor="SECUNDARY_BASE_07">
              <Text> ICONE </Text>
            </Container>
            <Container
              height="100%"
              width="100%"
              align="flex-start"
              jfContent="center"
              bgColor="PRIMARY_BASE_600">
              <Text fontSize="average"> Ocorrência: 0 </Text>
            </Container>
          </Container>
        </Container>
        <Container
          height="100%"
          width="50%"
          bgColor="SECUNDARY_BASE_05"
          align="center"
          jfContent="center">
          <Text fontSize="huge"> 00:00 </Text>
        </Container>
      </BoxInformation>
    </View>
  );
};
export default App;
