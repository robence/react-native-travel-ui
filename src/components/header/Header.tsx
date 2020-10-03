import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HamburgerMenu from './HamburgerMenu';
import { HeaderNavigationProp } from '../../navigation/TravelNavigator';

type HeaderProps = {
  color?: string;
};

export default function Header({ color }: HeaderProps) {
  const navigation = useNavigation<HeaderNavigationProp>();

  return (
    <View style={styles.container}>
      <HamburgerMenu navigation={navigation} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});
