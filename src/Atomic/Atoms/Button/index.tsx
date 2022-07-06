import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from './styles';
import {PropsButton} from './Models';

function Button({mt, mb, ml, mr, text, onPress}: PropsButton) {
  return (
    <TouchableOpacity mt={mt} mb={mb} ml={ml} mr={mr} onPress={() => onPress()}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
