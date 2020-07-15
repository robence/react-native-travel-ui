import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import { Container, HamburgerMenu } from '../../components/UI';
import { Colors } from '../../constants';

export default function TripScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.flex}>
        <Container>
          <View style={{ flexDirection: 'row' }}>
            <HamburgerMenu navigation={navigation} />
          </View>
          <View style={{ marginVertical: 30 }}>
            <Text>Destination country</Text>
          </View>
          <Text>Dropdown here</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingVertical: 30,
            }}
          >
            <View style={{ width: '50%' }}>
              <Text>Travellers</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text>Nights</Text>
            </View>
          </View>
          <Text>Travel style</Text>
          <View style={{ marginBottom: 60 }}>
            <Text>Styles</Text>
          </View>
          <View style={{ paddingVertical: 30 }}>
            <Text>Preferred country</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: Colors.primary,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 18,
                  textTransform: 'uppercase',
                }}
              >
                Calculate
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
