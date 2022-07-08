import styled from 'styled-components/native';
import {themes} from '../../../Styles/themeDefault';
import {PropsText} from './Models';
import {
  transformMarginHorizontal,
  transformMarginVertical,
  transformPadding,
  transformFontSize,
} from '../../Constants/tokens';

export const TextRegular = styled.Text<PropsText>`
  font-size: ${({fontSize}) =>
    fontSize ? transformFontSize(fontSize) : themes.fontSize.smaller}px;
  font-weight: ${({fontWeigth}) => (fontWeigth ? fontWeigth : 'auto')};
  color: ${({color}) => (color ? color : themes.LIGHT_BASE_900)};
  padding: ${({pd}) => (pd ? transformPadding(pd) : 0)}px;
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? transformMarginHorizontal(mb) : 0)}px;
  margin-left: ${({ml}) => (ml ? transformMarginVertical(ml) : 0)}px;
  margin-right: ${({mr}) => (mr ? transformMarginVertical(mr) : 0)}px;
`;
