import {
  PropsPadding,
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsBorderRadius,
} from '../../../../Styles/Models';

export interface PropsContainer {
  height?: string | number;
  width?: string | number;
  pd?: PropsPadding;
  bgColor?: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  jfContent?: 'flex-start' | 'center' | 'flex-end';
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
  bgColor?: string;
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
