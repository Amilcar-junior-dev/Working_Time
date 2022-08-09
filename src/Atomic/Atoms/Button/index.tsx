import React from 'react';
import {PropsButton} from './Models';
import Text from '../../Atoms/Text';
import {TouchableOpacity} from './styles';
import {themes} from '../../../Styles/themeDefault';

function Button({
  mt,
  mb,
  ml,
  mr,
  text,
  height,
  width,
  bgColor,
  align,
  jfContent,
  onPress,
}: PropsButton) {
  return (
    <TouchableOpacity
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      align={align}
      jfContent={jfContent}
      bgColor={bgColor}
      height={height}
      width={width}
      onPress={() => onPress()}>
      <Text fontSize="smaller" color={themes.LIGHT_BASE_900}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
