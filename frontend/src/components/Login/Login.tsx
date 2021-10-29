import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

import styles from '../../styles/styles';

export default function Login({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressHandlerRegister = () => {
    navigation.navigate('Register');
  };
  const onPressHandlerDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.login_background}
          source={{uri: 'https://i.ibb.co/99S3gsz/Background-Plantdroid.jpg'}}>
          <View style={styles.login_body}>
            <Image
              source={{uri: 'https://i.ibb.co/hVqfSSp/Plantdroid-logo-v3.png'}}
              style={styles.login_logo}
            />
            <Text style={styles.login_title}>Plantdroid</Text>
            <TextInput
              style={styles.userData}
              left
              label="Email"
              value={email}
              onChangeText={item => setEmail(item)}
            />
            <TextInput
              style={styles.userData}
              left
              label="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={item => setPassword(item)}
            />
            <View style={styles.login_fixToText}>
              <Button
                color="#7BA891"
                mode="contained"
                onPress={onPressHandlerRegister}>
                Register
              </Button>
              <Button
                style={styles.login_loginButton}
                color="#7BA891"
                mode="contained"
                onPress={onPressHandlerDashboard}>
                Login
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
