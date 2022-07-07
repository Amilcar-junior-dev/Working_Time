import styled from 'styled-components/native';
import {PropsTouchableOpacity} from './Models';

export const TouchableOpacity = styled.TouchableOpacity<PropsTouchableOpacity>`
  height: ${({height}) => (height ? height : 30)}px;
  width: ${({width}) => (width ? width : 50)}px;
  margin-top: ${({mt}) => (mt ? mt : 0)}px;
  margin-bottom: ${({mb}) => (mb ? mb : 0)}px;
  margin-left: ${({ml}) => (ml ? ml : 0)}px;
  margin-right: ${({mr}) => (mr ? mr : 0)}px;
`;
