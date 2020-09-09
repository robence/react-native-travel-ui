import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { CardContainer, Spacer, PrimaryButton } from '../../components/UI';
import { Header, HeaderTitle } from '../../components/header';
import { Colors, Sizes } from '../../constants';
import { TripCost } from '../../components/TripOverview';
import CostDetailList from '../../components/TripOverview/CostDetailList/CostDetailList';

export default function TripOverviewScreen() {
  const onCalculateTrip = () => {};

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
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}
        >
          <Spacer>
            <TripCost />
          </Spacer>
          <Spacer>
            <CostDetailList />
          </Spacer>
          <View style={styles.bottom}>
            <Spacer>
              <PrimaryButton
                title="Calculate a new trip"
                onPress={onCalculateTrip}
              />
            </Spacer>
          </View>
        </ScrollView>
      </CardContainer>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    minHeight: '95%',
    justifyContent: 'flex-start',
  },
  bottom: {
    marginTop: 'auto',
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
});
