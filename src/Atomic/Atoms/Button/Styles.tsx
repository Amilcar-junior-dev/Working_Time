import styled from 'styled-components/native';
import {PropsTouchableOpacity} from './Models';

export const TouchableOpacity = styled.TouchableOpacity<PropsTouchableOpacity>`
  height: ${({height}) => (height ? height : '20px')};
  width: ${({width}) => (width ? width : '50px')};
  margin-top: ${({mt}) => (mt ? mt : '0px')};
  margin-bottom: ${({mb}) => (mb ? mb : '0px')};
  margin-left: ${({ml}) => (ml ? ml : '0px')};
  margin-right: ${({mr}) => (mr ? mr : '0px')};
`;
