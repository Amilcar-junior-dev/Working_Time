import {
  PropsColors,
  PropsPadding,
  PropsSpaceHorizontal,
  PropsSpaceVertical,
} from '../../../../Styles/Models';
export interface PropsHeader {
  height?: string | number;
  width?: string | number;
  fDirection?: 'row' | 'column';
  bgColor?: PropsColors;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
