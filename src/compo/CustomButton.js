import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          textAlign: 'center',
          color: 'white',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    backgroundColor: 'blue',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
