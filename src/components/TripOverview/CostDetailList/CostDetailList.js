import React from 'react';
import { View, StyleSheet } from 'react-native';

import CostDetailCard from './CostDetailCard';
import { Hotel, Transport, Food, Other } from '../../svg/TripOverView';
import { Label } from '../../UI';
import { Colors } from '../../../constants';

export default function CostDetailList() {
  return (
    <>
      <Label>Cost details:</Label>
      <View style={styles.inlineCards}>
        <CostDetailCard
          label="Transport"
          text="400 kn"
          color={Colors.yellow}
          backgroundColor={Colors.lightYellow}
          Icon={Transport}
        />
        <CostDetailCard
          label="Hotel"
          text="600 kn"
          color={Colors.primary}
          backgroundColor={Colors.lightBlue}
          Icon={Hotel}
        />
      </View>
      <View style={styles.inlineCards}>
        <CostDetailCard
          label="Food"
          text="320 kn"
          color={Colors.green}
          backgroundColor={Colors.lightGreen}
          Icon={Food}
        />
        <CostDetailCard
          label="Other"
          text="230 kn"
          color={Colors.red}
          backgroundColor={Colors.lightRed}
          Icon={Other}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inlineCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
