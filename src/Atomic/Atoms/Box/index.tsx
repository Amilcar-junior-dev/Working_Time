import styled from 'styled-components/native';
import {
  PropsContainer,
  PropsBoxHeader,
  PropsCircle,
  PropsSeparator,
} from './Models';
import {
  transformPadding,
  transformMarginHorizontal,
  transformMarginVertical,
  transformBorderRadius,
  // mapColors, FUNÇÃO NÃO FUNCIONA
} from '../../Constants/tokens';
import {themes} from '../../../Styles/themeDefault';

export const Container = styled.View<PropsContainer>`
  height: ${({height}) => (height ? height : '0px')};
  width: ${({width}) => (width ? width : '0px')};
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  background-color: ${({bgColor}) =>
    bgColor ? bgColor : themes.LIGHT_BASE_900};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  flex-direction: ${({fDirection}) => (fDirection ? fDirection : 'column')};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 0}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;

export const BoxHeader = styled.View<PropsBoxHeader>`
  height: ${({height}) => (height ? height : '20px')};
  width: ${({width}) => (width ? width : '100px')};
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  background-color: ${({bgColor}) => (bgColor ? bgColor : 'transparent')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  flex-direction: ${({fDirection}) => (fDirection ? fDirection : 'column')};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 0}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;

export const Circle = styled.View<PropsCircle>`
  height: ${({height}) => (height ? height : '50px')};
  width: ${({width}) => (width ? width : '50px')};
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  background-color: ${({bgColor}) =>
    bgColor ? bgColor : themes.LIGHT_BASE_900};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 75}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;

export const Separator = styled.View<PropsSeparator>`
  height: ${({height}) => (height ? height : '3px')};
  width: ${({width}) => (width ? width : '100%')};
  background-color: ${({bgColor}) =>
    bgColor ? bgColor : themes.LIGHT_BASE_900};
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;
