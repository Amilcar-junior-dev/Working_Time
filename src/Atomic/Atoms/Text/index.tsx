import React from 'react';
import {PropsText} from './Models';
import {TextRegular} from './styles';

const Text: React.FC<PropsText> = ({
  fontSize,
  fontWeigth,
  color,
  mt,
  mb,
  ml,
  mr,
  pd,
  underline,
  align,
  children,
}) => {
  return (
    <TextRegular
      fontSize={fontSize}
      fontWeigth={fontWeigth}
      color={color}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pd={pd}
      underline={underline}
      align={align}>
      {children}
    </TextRegular>
  );
};
export default Text;
