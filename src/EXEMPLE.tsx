import React from 'react';
import {View} from 'react-native';
import {BoxTimeBalance, Container} from './Atomic/Atoms/Box';
import Text from './Atomic/Atoms/Text';
import {PropsTimeBalance} from './Atomic/Molecules/timeBalance/Models';
import {themes} from '././Styles/themeDefault';

const TimeBalance: React.FC<PropsTimeBalance> = ({}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <BoxTimeBalance
        height="120px"
        width="100%"
        bdRadius="big"
        mt="xxxbig"
        bgColor={themes.PRIMARY_BASE_600}>
        <Container
          bgColor="transparent"
          width="100%"
          height="30%"
          bdRadius="big"
          align="center"
          jfContent="center">
          <Text
            fontSize="xxbig"
            fontWeigth="bold"
            color={themes.SECUNDARY_BASE_05}>
            {' '}
            12 / 07 / 2022
          </Text>
        </Container>
        <Container
          fDirection="row"
          bgColor="transparent"
          width="100%"
          height="70%"
          bdRadius="big">
          <Container
            width="50%"
            height="100%"
            bgColor="transparent"
            bdRadius="big"
            align="center">
            <Text mt="medium"> Tempo Restante </Text>
            <Container
              width="80%"
              height="50%"
              bgColor="transparent"
              align="center"
              bdRadius="big"
              jfContent="center">
              <Text fontSize="xxbig" fontWeigth="900">
                {' '}
                00:00{' '}
              </Text>
            </Container>
          </Container>
          <Container
            width="50%"
            height="100%"
            bgColor="transparent"
            bdRadius="big"
            align="center">
            <Text mt="medium"> Tempo Restante </Text>
            <Container
              width="80%"
              height="50%"
              bgColor="transparent"
              align="center"
              bdRadius="big"
              jfContent="center">
              <Text fontSize="xxbig" fontWeigth="900">
                {' '}
                00:00{' '}
              </Text>
            </Container>
          </Container>
        </Container>
      </BoxTimeBalance>
    </View>
  );
};

export default TimeBalance;
