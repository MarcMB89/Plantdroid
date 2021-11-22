import React from 'react';

import {StatusBar, Text, ImageBackground, View, Image, SafeAreaView} from 'react-native';

import {Button} from 'react-native-paper';

import styles from './profileStyle';


export default function Profile({navigation}: any) {
  const onPressHandlerLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.profile_container}>
      <StatusBar backgroundColor="#7BA891" />
      <View style={styles.profile_background}>
        <ImageBackground
          style={styles.profile_background}
          source={{uri: 'https://i.ibb.co/99S3gsz/Background-Plantdroid.jpg'}}>
          <View style={styles.profile_body}>
            <Image
              source={{uri:'https://lh3.googleusercontent.com/a/AATXAJwEEYi9UmJfqRywEb_Krvyoco5a4rdbiZqp-cr2=s360-p-rw-no-mo'}}
              style={styles.profile_photo}
            />
          </View>
                <View style={styles.profile_userData_container}>
                  <Text style={styles.profile_userData}>User </Text>
                  <Text style={styles.profile_userData_text}>Marc Martín</Text>
                </View>
                <View style={styles.profile_userData_container}>
                    <Text style={styles.profile_userData}>Email </Text>
                    <Text style={styles.profile_userData_text}>marcmartinbarrios@gmail.com</Text>
                </View>
                <Button
                  style={styles.profile_logoutButton}
                  color="#7BA891"
                  mode="contained"
                  onPress={onPressHandlerLogout}>
                  <Text>Logout</Text>
                </Button>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
