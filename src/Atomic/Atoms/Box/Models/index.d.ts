import {
  PropsPadding,
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsBorderRadius,
  PropsColors,
} from '../../../../Styles/Models';

export interface PropsContainer {
  height?: string | number;
  width?: string | number;
  pd?: PropsPadding;
  bgColor?: PropsColors;
  align?: 'flex-start' | 'center' | 'flex-end';
  jfContent?: 'flex-start' | 'center' | 'flex-end';
  fDirection?: 'row' | 'column';
  bdRadius?: PropsBorderRadius;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
export interface PropsBoxHeader {
  height?: string | number;
  width?: string | number;
  pd?: PropsPadding;
  bgColor?: PropsColors;
  align?: 'flex-start' | 'center' | 'flex-end';
  jfContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  fDirection?: 'row' | 'column';
  bdRadius?: PropsBorderRadius;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
export interface PropsCircle {
  height?: string | number;
  width?: string | number;
  pd?: PropsPadding;
  bgColor?: PropsColors;
  align?: 'flex-start' | 'center' | 'flex-end';
  jfContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  bdRadius?: PropsBorderRadius;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}

export interface PropsSeparator {
  height?: string | number;
  width?: string | number;
  bgColor?: PropsColors;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}

export interface PropsBoxTimeBalance {
  height?: string | number;
  width?: string | number;
  bgColor?: PropsColors;
  bdRadius?: PropsBorderRadius;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
export interface PropsBoxInformation {
  height?: string | number;
  width?: string | number;
  bgColor?: PropsColors;
  fDirection?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end';
  jfContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-around'
    | 'space-between';
  bdRadius?: PropsBorderRadius;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
