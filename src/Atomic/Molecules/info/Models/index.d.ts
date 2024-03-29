import {
  PropsBorderRadius,
  PropsPadding,
  PropsSpaceHorizontal,
  PropsSpaceVertical,
} from '../../../../Styles/Models';
export interface PropsInformation {
  height?: string | number;
  width?: string | number;
  bgColor?: string;
  bdRadius?: PropsBorderRadius;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
