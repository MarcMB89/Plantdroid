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
import styles from './registerStyle';

export default function Register({navigation}: any) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressHandler = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.register_container}>
      <StatusBar backgroundColor="#7BA891" />
      <View style={styles.register_background}>
        <ImageBackground
          style={styles.register_background}
          source={{uri: 'https://i.ibb.co/99S3gsz/Background-Plantdroid.jpg'}}>
          <View style={styles.register_body}>
            <Image
              source={{uri: 'https://i.ibb.co/hVqfSSp/Plantdroid-logo-v3.png'}}
              style={styles.register_logo}
            />
            <Text style={styles.register_title}>Plantdroid</Text>
            <TextInput
              style={styles.register_userData}
              left
              label="User"
              value={user}
              onChangeText={item => setUser(item)}
            />
            <TextInput
              style={styles.register_userData}
              left
              label="Email"
              value={email}
              onChangeText={item => setEmail(item)}
            />
            <TextInput
              style={styles.register_userData}
              left
              secureTextEntry={true}
              label="Password"
              value={password}
              onChangeText={item => setPassword(item)}
            />
            <Button
              style={styles.register_fixToText}
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
