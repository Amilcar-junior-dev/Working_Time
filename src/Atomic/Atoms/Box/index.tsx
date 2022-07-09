import styled from 'styled-components/native';
import {PropsContainer, PropsBoxHeader} from './Models';
import {
  transformPadding,
  transformMarginHorizontal,
  transformMarginVertical,
  transformBorderRadius,
  // mapColors, FUNÇÃO NÃO FUNCIONA
} from '../../Constants/tokens';
import {themes} from '../../../Styles/themeDefault';

export const Container = styled.View<PropsContainer>`
  height: ${({height}) => (height ? height : 0)}px;
  width: ${({width}) => (width ? width : 0)}px;
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  background-color: ${({bgColor}) =>
    bgColor ? bgColor : themes.LIGHT_BASE_900};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 0}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;

export const Header = styled.View<PropsBoxHeader>`
  height: ${({height}) => (height ? height : '20px')};
  width: ${({width}) => (width ? width : '100px')};
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  background-color: ${({bgColor}) => (bgColor ? bgColor : 'transparent')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 0}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;
