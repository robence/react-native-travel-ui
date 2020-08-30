import React from 'react';
import { View } from 'react-native';

export default function Spacer({ vertical = 15, children }) {
  const propStyles = { marginVertical: vertical };

  return <View style={propStyles}>{children}</View>;
}
