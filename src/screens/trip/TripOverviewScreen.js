import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { CardContainer } from '../../components/UI';
import { Header } from '../../components/header';
import { Colors, Sizes } from '../../constants';

export default function TripOverviewScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <CardContainer style={styles.headerCard}>
        <Header />
      </CardContainer>
      <CardContainer style={styles.primaryCard}>
        <View style={styles.center}>
          <Text>hello</Text>
        </View>
      </CardContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  headerCard: {
    backgroundColor: Colors.primary,
    marginBottom: (Sizes.height / 12) * -1,
  },
  primaryCard: {
    flex: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
