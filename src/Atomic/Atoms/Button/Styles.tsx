import styled from 'styled-components/native';
import {
  transformMarginHorizontal,
  transformMarginVertical,
  transformPadding,
  // mapColors,
} from '../../Constants/tokens';
import {PropsTouchableOpacity} from './Models';

export const TouchableOpacity = styled.TouchableOpacity<PropsTouchableOpacity>`
  height: ${({height}) => (height ? height : 15)}px;
  width: ${({width}) => (width ? width : 25)}px;
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  flex-direction: ${({fDirection}) => (fDirection ? fDirection : 'column')};
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;
