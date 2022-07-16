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
}) => {
  return (
    <BoxHeader
      height={height}
      width={width}
      fDirection={fDirection}
      bgColor={bgColor}>
      <Container
        height="100%"
        width="70%"
        align="center"
        bgColor="transparent"
        fDirection="row">
        <Circle height="80px" width="80px" ml="small" />
        <Text fontSize="average" ml="small">
          {' '}
          Name User{' '}
        </Text>
      </Container>
      <Container height="100%" width="100%" bgColor="transparent" />
    </BoxHeader>
  );
};
export default Header;
