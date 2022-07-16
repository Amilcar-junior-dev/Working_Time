import React from 'react';
import {BoxInformation, Container} from '../../Atoms/Box';
import Text from '../../Atoms/Text';
import {themes} from '../../../Styles/themeDefault';
import {PropsBoxInformation} from '../../Atoms/Box/Models';

const Information: React.FC<PropsBoxInformation> = ({
  height,
  width,
  bgColor,
  fDirection,
}) => {
  return (
    <BoxInformation
      height={height}
      width={width}
      bgColor={bgColor}
      fDirection={fDirection}>
      <Container height="100%" width="50%">
        <Container height="20%" width="100%" fDirection="row">
          <Container
            height="100%"
            width="20%"
            align="center"
            jfContent="center">
            <Text> ICONE </Text>
          </Container>
          <Container
            height="100%"
            width="100%"
            align="flex-start"
            jfContent="center">
            <Text fontSize="average"> Início Expediente: 00:00</Text>
          </Container>
        </Container>
        <Container height="20%" width="100%" fDirection="row">
          <Container
            height="100%"
            width="20%"
            align="center"
            jfContent="center">
            <Text> ICONE </Text>
          </Container>
          <Container
            height="100%"
            width="100%"
            align="flex-start"
            jfContent="center">
            <Text fontSize="average"> Almoço: 00:00</Text>
          </Container>
        </Container>
        <Container height="20%" width="100%" fDirection="row">
          <Container
            height="100%"
            width="20%"
            align="center"
            jfContent="center">
            <Text> ICONE </Text>
          </Container>
          <Container
            height="100%"
            width="100%"
            align="flex-start"
            jfContent="center">
            <Text fontSize="average"> Retorno: 00:00</Text>
          </Container>
        </Container>
        <Container height="20%" width="100%" fDirection="row">
          <Container
            height="100%"
            width="20%"
            align="center"
            jfContent="center">
            <Text> ICONE </Text>
          </Container>
          <Container
            height="100%"
            width="100%"
            align="flex-start"
            jfContent="center">
            <Text fontSize="average"> Final Expediente: 00:00</Text>
          </Container>
        </Container>
        <Container height="20%" width="100%" fDirection="row">
          <Container
            height="100%"
            width="20%"
            align="center"
            jfContent="center">
            <Text> ICONE </Text>
          </Container>
          <Container
            height="100%"
            width="100%"
            align="flex-start"
            jfContent="center">
            <Text fontSize="average"> Ocorrência: 0 </Text>
          </Container>
        </Container>
      </Container>
      <Container height="100%" width="50%" align="center" jfContent="center">
        <Text color={themes.SECUNDARY_BASE_07} fontSize="huge">
          {' '}
          00:00{' '}
        </Text>
      </Container>
    </BoxInformation>
  );
};
export default Information;
