import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsPadding,
  PropsFontSize,
} from '../../../../Styles/Models';

export interface PropsText {
  fontSize?: PropsFontSize;
  fontWeigth?: string | number;
  color?: string;
  pd?: PropsPadding;
  mt?: PropsSpaceHorizontal;
  mb?: PropsSpaceHorizontal;
  ml?: PropsSpaceVertical;
  mr?: PropsSpaceVertical;
  padding?: PropsPadding;
  underline?: boolean;
  align?: 'left' | 'center' | 'right';
  children?: any;
}
