import React from 'react';
import {Pressable, ScrollView, StatusBar, SafeAreaView} from 'react-native';
import {Card, Button, Text} from 'react-native-paper';
import styles from '../../styles/styles';

export default function Dashboard({navigation}: any) {
  const onPressHandlerDataList = () => {
    navigation.navigate('DataList');
  };
  const onPressHandlerProfile = () => {
    navigation.navigate('Profile');
  };
  const onPressHandlerFavoriteList = () => {
    navigation.navigate('FavoriteList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <ScrollView style={styles.background}>
        <Pressable 
          onPress={onPressHandlerDataList}
          testID= "DataListTest">
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S',
              }}
            />
            <Card.Actions>
              <Button 
              onPress={onPressHandlerDataList}>
                <Text style={styles.card_paragraph}>Go to the database list</Text>
              </Button>
            </Card.Actions>
          </Card>
        </Pressable>
        <Pressable onPress={onPressHandlerFavoriteList}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://i.pinimg.com/564x/a8/37/4e/a8374e1f6d3a1f67ad20b1f837a2116b.jpg',
              }}
            />
            <Card.Actions>
              <Button onPress={onPressHandlerFavoriteList}>
              <Text style={styles.card_paragraph}>Go to your garden</Text>
              </Button>
            </Card.Actions>
          </Card>
        </Pressable>
        <Pressable onPress={onPressHandlerProfile}>
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://s3.envato.com/files/252319777/preview.jpg',
              }}
            />
            <Card.Actions>
              <Button 
                onPress={onPressHandlerProfile}>
                 <Text style={styles.card_paragraph}>Go to your profile</Text>
              </Button>
            </Card.Actions>
          </Card>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
