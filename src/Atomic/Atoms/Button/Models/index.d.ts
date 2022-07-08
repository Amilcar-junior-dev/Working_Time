import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsPadding,
  PropsColors,
} from '../../../../Styles/Models';
// import {defaultColors} from '../../../../Styles/themeDefault';
export interface PropsButton {
  height?: string | number;
  width?: string | number;
  text?: string;
  color?: string;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
  onPress: () => void;
}
export interface PropsTouchableOpacity {
  height?: string | number;
  width?: string | number;
  color?: PropsColors;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
