import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsPadding,
} from '../../../../Styles/Models';
export interface PropsButton {
  height?: string | number;
  width?: string | number;
  text?: string;
  padding?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
  onPress: () => void;
}
export interface PropsTouchableOpacity {
  height?: string | number;
  width?: string | number;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
