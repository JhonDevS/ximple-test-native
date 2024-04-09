import {View as DefaultView} from 'react-native';
import React from 'react';
import {ViewProps} from '../../types/ThemeProps';
import {useThemeColor} from '../../hooks/useThemeColor';

export function View(props: ViewProps) {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    'background',
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}
