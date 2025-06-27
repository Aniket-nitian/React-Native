import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const ScreenB = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>ScreenB {route.params.name}</Text>
      <Button
        title="go Back"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
    </View>
  );
};

export default ScreenB;
