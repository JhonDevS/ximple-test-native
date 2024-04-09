import {generalStyles} from '../../styles/GeneralStyles';
import {InputProps} from '../../types/ThemeProps';
import {TextInput} from 'react-native';
import React from 'react';

export function Input(props: InputProps) {
  return (
    <TextInput
      style={generalStyles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}
