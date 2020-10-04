import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

type OptionProps = {
  color: string;
  backgroundColor: string;
  Icon: React.ElementType;
};

type ColoredCardProps = {
  label: string;
  options: OptionProps;
  selected: boolean;
  setSelected: (event: GestureResponderEvent) => void;
};

export default function ColoredCard(props: ColoredCardProps) {
  const { label, options, selected, setSelected } = props;
  const { color, backgroundColor, Icon } = options;

  return (
    <Pressable
      style={[
        { backgroundColor },
        selected ? { borderWidth: 2, borderColor: color } : {},
        styles.card,
      ]}
      onPress={setSelected}
    >
      <View style={styles.align}>
        <View style={styles.img}>
          <Icon />
        </View>
        <View>
          <Text style={[styles.text, { color: color }]}>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: '30%',
    borderRadius: 16,
  },
  align: {
    alignItems: 'center',
  },
  img: {
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
  },
});
