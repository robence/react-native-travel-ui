import React from 'react';
import { View, StyleSheet } from 'react-native';

import ColoredCard from './ColoredCard';
import { Budget, MidClass, Luxury } from '../../../components/svg';
import { Label } from '../../UI';
import { Colors } from '../../../constants';
import type { SelectHandlerProps } from '../../headless/SelectHandler';

const cardConfig = [
  {
    label: 'Budget',
    color: Colors.red,
    backgroundColor: Colors.lightRed,
    Icon: Budget,
  },
  {
    label: 'Mid-class',
    color: Colors.yellow,
    backgroundColor: Colors.lightYellow,
    Icon: MidClass,
  },
  {
    label: 'Luxury',
    color: Colors.primary,
    backgroundColor: Colors.lightBlue,
    Icon: Luxury,
  },
];

type ColoredCardListProps = SelectHandlerProps;

export default function ColoredCardList(props: ColoredCardListProps) {
  const { selected: selectedLabel, setSelected } = props;

  return (
    <>
      <Label>Travel style</Label>
      <View style={styles.inlineCards}>
        {cardConfig.map(({ label, color, backgroundColor, Icon }) => (
          <ColoredCard
            key={label}
            label={label}
            selected={selectedLabel === label}
            setSelected={() => setSelected(label)}
            options={{ color, backgroundColor, Icon }}
          />
        ))}
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
