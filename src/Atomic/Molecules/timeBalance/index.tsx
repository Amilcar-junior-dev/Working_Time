import React from 'react';
import {BoxTimeBalance, Container} from '../../Atoms/Box';
import Text from '../../Atoms/Text';
import {PropsTimeBalance} from '../../Molecules/timeBalance/Models';
import {themes} from '../../../Styles/themeDefault';

const TimeBalance: React.FC<PropsTimeBalance> = ({
  height,
  width,
  bgColor,
  bdRadius,
  pd,
  mt,
  mb,
  ml,
  mr,
}) => {
  return (
    <BoxTimeBalance
      height={height}
      width={width}
      bdRadius={bdRadius}
      pd={pd}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      bgColor={bgColor}>
      <Container
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
      <Container fDirection="row" width="100%" height="70%" bdRadius="big">
        <Container width="50%" height="100%" bdRadius="big" align="center">
          <Text mt="medium"> Tempo Restante </Text>
          <Container
            width="80%"
            height="50%"
            align="center"
            bdRadius="big"
            jfContent="center">
            <Text fontSize="xxbig" fontWeigth="900">
              {' '}
              00:00{' '}
            </Text>
          </Container>
        </Container>
        <Container width="50%" height="100%" bdRadius="big" align="center">
          <Text mt="medium"> Tempo Restante </Text>
          <Container
            width="80%"
            height="50%"
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
  );
};
export default TimeBalance;
