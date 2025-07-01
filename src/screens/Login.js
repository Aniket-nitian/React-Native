import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../compo/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        onChange={txt => setEmail(txt)}
        placeholder="Enter Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChange={txt => setEmail(txt)}
        placeholder="Enter Password"
        style={styles.input}
      />
      <CustomButton
        onPress={() => {
          navigation.navigate('Main');
        }}
        title="Login"
      />
      <Text
        style={styles.signuptxt}
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        Or Create New Account <Text style={styles.signup}> Sign Up </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 60,
    fontWeight: '900',
    alignSelf: 'center',
    marginTop: 200,
    fontFamily: 'cursive',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 48,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  signuptxt: {
    alignSelf: 'center',
    marginTop: 20,
  },
  signup: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: '600',
    color: 'blue',
  },
});
