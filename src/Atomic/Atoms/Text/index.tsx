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
  padding,
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
      padding={padding}
      underline={underline}
      align={align}
      children={children}
    />
  );
};
export default Text;
