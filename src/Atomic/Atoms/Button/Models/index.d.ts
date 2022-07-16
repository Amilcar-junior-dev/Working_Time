import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsPadding,
  PropsColors,
} from '../../../../Styles/Models';

export interface PropsButton {
  height?: string | number;
  width?: string | number;
  text?: string;
  bgColor?: string;
  color?: string;
  align?: 'flex-star' | 'center' | 'flex-end';
  jfContent?: 'flex-start' | 'center' | 'flex-end';
  fDirection?: 'column' | 'row';
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
  bgColor?: string;
  align?: 'flex-star' | 'center' | 'flex-end';
  jfContent?: 'flex-start' | 'center' | 'flex-end';
  fDirection?: 'column' | 'row';
  color?: PropsColors;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
}
