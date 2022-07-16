import styled from 'styled-components/native';
import {
  PropsContainer,
  PropsBoxHeader,
  PropsCircle,
  PropsSeparator,
  PropsBoxTimeBalance,
  PropsBoxInformation,
} from './Models';
import {
  transformPadding,
  transformMarginHorizontal,
  transformMarginVertical,
  transformBorderRadius,
  mapColors,
} from '../../Constants/tokens';
import {themes} from '../../../Styles/themeDefault';

export const Container = styled.View<PropsContainer>`
  height: ${({height}) => (height ? height : '0px')};
  width: ${({width}) => (width ? width : '0px')};
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  background-color: ${({bgColor}) =>
    bgColor ? mapColors(themes, bgColor) : 'transparent'};
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
  background-color: ${({bgColor}) =>
    bgColor ? mapColors(themes, bgColor) : 'transparent'};
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
    bgColor ? mapColors(themes, bgColor) : 'transparent'};
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
    bgColor ? mapColors(themes, bgColor) : 'transparent'};
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;

export const BoxTimeBalance = styled.View<PropsBoxTimeBalance>`
  height: ${({height}) => (height ? height : '100px')};
  width: ${({width}) => (width ? width : '100%')};
  background-color: ${({bgColor}) =>
    bgColor ? mapColors(themes, bgColor) : 'transparent'};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 10}px;
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;

export const BoxInformation = styled.View<PropsBoxInformation>`
  height: ${({height}) => (height ? height : '100px')};
  width: ${({width}) => (width ? width : '100%')};
  background-color: ${({bgColor}) =>
    bgColor ? mapColors(themes, bgColor) : 'transparent'};
  flex-direction: ${({fDirection}) => (fDirection ? fDirection : 'column')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  justify-content: ${({jfContent}) => (jfContent ? jfContent : 'flex-start')};
  border-radius: ${({bdRadius}) =>
    bdRadius ? transformBorderRadius(bdRadius) : 0}px;
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;
