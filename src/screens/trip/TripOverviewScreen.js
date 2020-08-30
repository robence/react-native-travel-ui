import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import { CardContainer } from '../../components/UI';
import { Header, HeaderTitle } from '../../components/header';
import { Colors, Sizes } from '../../constants';

export default function TripOverviewScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <CardContainer fullScreen style={styles.headerCard}>
        <Header color="white" />
        <HeaderTitle title={'Croatia'} />
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
    marginBottom: Sizes.small
      ? (Sizes.height / 5) * -1
      : (Sizes.height / 4) * -1,
  },
  primaryCard: {
    flex: 2,
    marginHorizontal: 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
