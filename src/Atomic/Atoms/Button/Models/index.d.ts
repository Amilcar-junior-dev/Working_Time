import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
} from '../../../../Styles/Models';
export interface PropsButton {
  text?: string;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
  onPress: () => void;
}
export interface PropsTouchableOpacity {
  height?: string | number;
  width?: string | number;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
