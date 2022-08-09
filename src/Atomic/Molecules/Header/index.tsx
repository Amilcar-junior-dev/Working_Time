import React from 'react';
import {BoxHeader, Container, Circle} from '../../Atoms/Box';
import Text from '../../Atoms/Text';
import {PropsHeader} from '../Header/Models/index';
// import {themes} from '../../../Styles/themeDefault';

export const Header: React.FC<PropsHeader> = ({
  height,
  width,
  fDirection,
  bgColor,
  mb,
}) => {
  return (
    <BoxHeader
      height={height}
      width={width}
      fDirection={fDirection}
      mb={mb}
      bgColor={bgColor}>
      <Container height="100%" width="70%" align="center" fDirection="row">
        <Circle
          height="80px"
          width="80px"
          ml="small"
          bgColor="LIGHT_BASE_900"
        />
        <Text fontSize="average" ml="small">
          {' '}
          Name User{' '}
        </Text>
      </Container>
      <Container height="100%" width="100%" bgColor="LIGHT_BASE_900" />
    </BoxHeader>
  );
};
export default Header;
