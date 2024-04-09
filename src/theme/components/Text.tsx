import {Text as DefaultText} from 'react-native';
import React from 'react';
import {TextProps} from '../../types/ThemeProps';
import {useThemeColor} from '../../hooks/useThemeColor';

export function Text(props: TextProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return <DefaultText style={[{color}, style]} {...otherProps} />;
}
