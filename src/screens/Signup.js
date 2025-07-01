import {
  Alert,
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
import axios from 'axios';
import { BASE_URL } from '../apis/Api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const registerUser = async () => {
    const data = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post(`${BASE_URL}auth/register`, data);
      Alert.alert('data', JSON.stringify(response.data));
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <TextInput
        value={name}
        onChange={txt => setName(txt)}
        placeholder="Enter Name"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChange={txt => setEmail(txt)}
        placeholder="Enter Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChange={txt => setPassword(txt)}
        placeholder="Enter Password"
        style={styles.input}
      />
      <CustomButton
        onPress={() => {
          registerUser();
        }}
        title="Sign Up"
      />
      <Text
        style={styles.signuptxt}
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        Or Already have an Account <Text style={styles.signup}> Login </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signup;

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
