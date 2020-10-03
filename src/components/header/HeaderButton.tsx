import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../constants';

export default function CustomHeaderButton(props: any) {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primary}
      {...props}
    />
  );
}
