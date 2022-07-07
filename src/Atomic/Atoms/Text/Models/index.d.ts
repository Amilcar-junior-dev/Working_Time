import {
  PropsSpaceHorizontal,
  PropsSpaceVertical,
  PropsPadding,
} from '../../../../Styles/Models';

export interface PropsText {
  fontSize?: string | number;
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
