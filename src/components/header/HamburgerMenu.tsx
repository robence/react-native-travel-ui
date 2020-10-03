import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from './HeaderButton';
import { Colors } from '../../constants';
import { HeaderNavigationProp } from '../../navigation/TravelNavigator';

type HamburgerMenuProps = {
  navigation: HeaderNavigationProp;
  color?: string;
};

export default function HamburgerMenu(props: HamburgerMenuProps) {
  const { navigation, color = Colors.primary } = props;

  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="md-menu"
        onPress={() => navigation.openDrawer()}
        iconSize={30}
        color={color}
      />
    </HeaderButtons>
  );
}
