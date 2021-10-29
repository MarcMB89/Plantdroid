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

export default function Register({navigation}: any) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressHandler = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7BA891" />
      <View style={styles.login_background}>
        <ImageBackground
          style={styles.login_background}
          source={{uri: 'https://i.ibb.co/99S3gsz/Background-Plantdroid.jpg'}}>
          <View style={styles.body}>
            <Image
              source={{uri: 'https://i.ibb.co/hVqfSSp/Plantdroid-logo-v3.png'}}
              style={styles.login_logo}
            />
            <Text style={styles.login_title}>Plantdroid</Text>
            <TextInput
              style={styles.userData}
              left
              label="User"
              value={user}
              onChangeText={item => setUser(item)}
            />
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
              secureTextEntry={true}
              label="Password"
              value={password}
              onChangeText={item => setPassword(item)}
            />
            <Button
              style={styles.login_fixToText}
              color="#7BA891"
              mode="contained"
              onPress={onPressHandler}>
              Register
            </Button>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
