import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsPadding,
  PropsFontSize,
} from '../../../../Styles/Models';

export interface PropsText {
  fontSize?: PropsFontSize;
  fontWeigth?: 'normal' | 'bold' | '500' | '600' | '700' | '800' | '900';
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
