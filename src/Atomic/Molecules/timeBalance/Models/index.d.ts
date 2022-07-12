import {
  PropsPadding,
  PropsSpaceHorizontal,
  PropsSpaceVertical,
} from '../../../../Styles/Models';
export interface PropsTimeBalance {
  height?: string | number;
  width?: string | number;
  bgColor?: string;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
