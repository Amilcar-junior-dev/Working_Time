import React from 'react';
import {TouchableOpacity} from './styles';
import {PropsButton} from './Models';
import Text from '../../Atoms/Text';

function Button({mt, mb, ml, mr, text, height, width, onPress}: PropsButton) {
  return (
    <TouchableOpacity
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      height={height}
      width={width}
      onPress={() => onPress()}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
