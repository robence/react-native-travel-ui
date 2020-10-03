import React from 'react';
import { View } from 'react-native';

type SpacerProps = {
  vertical?: number;
  children: React.ReactNode;
};

export default function Spacer(props: SpacerProps) {
  const { vertical = 15, children } = props;

  const propStyles = { marginVertical: vertical };

  return <View style={propStyles}>{children}</View>;
}
