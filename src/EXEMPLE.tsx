import React from 'react';
import {BoxHeader, Container, Circle} from './Atomic/Atoms/Box';
import Text from './Atomic/Atoms/Text';
import {PropsBoxHeader} from './Atomic/Atoms/Box/Models';
import {themes} from './Styles/themeDefault';

export const Header: React.FC<PropsBoxHeader> = ({}) => {
  return (
    <BoxHeader
      height="100px"
      width="100%"
      fDirection="row"
      bgColor={themes.PRIMARY_BASE_800}>
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
