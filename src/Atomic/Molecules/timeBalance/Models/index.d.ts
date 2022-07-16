import {
  PropsBorderRadius,
  PropsPadding,
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsColors,
} from '../../../../Styles/Models';
export interface PropsTimeBalance {
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
