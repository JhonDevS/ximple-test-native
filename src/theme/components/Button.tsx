import {generalStyles} from '../../styles/GeneralStyles';
import {ButtonProps} from '../../types/ThemeProps';
import {Pressable} from 'react-native';
import React from 'react';

export function Button(props: ButtonProps) {
  return (
    <Pressable
      style={
        props.disabled ? generalStyles.buttonDisabled : generalStyles.button
      }
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.children}
    </Pressable>
  );
}
