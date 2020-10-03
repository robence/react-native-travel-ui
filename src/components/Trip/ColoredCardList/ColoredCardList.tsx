import React from 'react';
import { View, StyleSheet } from 'react-native';

import ColoredCard from './ColoredCard';
import { Budget, MidClass, Luxury } from '../../../components/svg';
import { Label } from '../../UI';
import { Colors } from '../../../constants';

export default function ColoredCardList() {
  return (
    <>
      <Label>Travel style</Label>
      <View style={styles.inlineCards}>
        <ColoredCard
          label="Budget"
          color={Colors.red}
          backgroundColor={Colors.lightRed}
          Icon={Budget}
        />
        <ColoredCard
          label="Mid-class"
          color={Colors.yellow}
          backgroundColor={Colors.lightYellow}
          Icon={MidClass}
        />
        <ColoredCard
          label="Luxury"
          color={Colors.primary}
          backgroundColor={Colors.lightBlue}
          Icon={Luxury}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inlineCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
