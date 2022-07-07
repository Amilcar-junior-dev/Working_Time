import React from 'react';
import {PropsButton} from './Models';
import Text from '../../Atoms/Text';
import {TouchableOpacity} from './Styles';

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
