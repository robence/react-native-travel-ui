import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HamburgerMenu from './HamburgerMenu';

export default function Header({ color }) {
  const navigation = useNavigation();

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
