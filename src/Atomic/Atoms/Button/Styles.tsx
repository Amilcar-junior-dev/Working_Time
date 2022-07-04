import styled from 'styled-components/native';
import {PropsButtonAdd} from './Models/index';

export const ButtonAdd = styled.View<PropsButtonAdd>`
  width: ${({width}) => (width ? width : '20px')};
  height: ${({height}) => (height ? height : '20px')};
  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '75px')};
  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : '#FFFFFF'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'flex-start')};
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'flex-start'};
  flex-direction: ${({flexDirection}) =>
    flexDirection ? flexDirection : 'column'};
`;
