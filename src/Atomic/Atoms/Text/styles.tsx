import styled from 'styled-components/native';
import {defaultColors} from '../../../Styles/themeDefault';
import {PropsText} from './Models';
import {transformMarginHorizontal} from '../../Constants/tokens';

export const TextRegular = styled.Text<PropsText>`
  font-size: ${({fontSize}) => (fontSize ? fontSize : 10)}px;
  font-weight: ${({fontWeigth}) => (fontWeigth ? fontWeigth : 'auto')};
  color: ${({color}) => (color ? color : defaultColors.LIGHT_BASE_800)};
  margin-top: ${({mt}) => (mt ? transformMarginHorizontal(mt) : 0)}px;
  margin-bottom: ${({mb}) => (mb ? mb : 0)}px;
  margin-left: ${({ml}) => (ml ? ml : 0)}px;
  margin-right: ${({mr}) => (mr ? mr : 0)}px;
`;
