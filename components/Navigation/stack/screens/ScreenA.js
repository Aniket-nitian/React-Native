import { View, Text, Button } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

const ScreenA = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ScreenA</Text>
      <Button
        title="Go To ScreenB"
        onPress={() => {
          navigation.navigate('ScreenB', {
            name: 'ANiket Chauhan',
          });
        }}
      ></Button>
    </View>
  );
};

export default ScreenA;

//*
// .navigate()
// .push()
// .replace() -- login to home
