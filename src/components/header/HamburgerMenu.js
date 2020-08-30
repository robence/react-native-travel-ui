import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from './HeaderButton';
import { Colors } from '../../constants';

export default function HamburgerMenu({ navigation, color = Colors.primary }) {
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
