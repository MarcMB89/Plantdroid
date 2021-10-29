import React from 'react';
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from '../../styles/styles';
import {Button, TextInput} from 'react-native-paper';

export default function DataDetails({navigation, route}: any) {
  const onPressHandlerDashboard = () => {
    navigation.navigate('Dashboard');
  };
  const onPressHandlerFavoriteList = () => {
    navigation.navigate('FavoriteList');
  };

  const {
    picture,
    scientific_name,
    common_name,
    watering_per_week
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <ScrollView style={styles.listbackground}>
        <View style={styles.details_item}>
          <Image source={{uri: picture}} style={styles.default_plant_photo} />
          <View style={styles.details_item2}>
            <Text style={styles.data_text_title_top}>Scientific name:</Text>
            <Text style={styles.data_text_top}>{scientific_name}</Text>
            <Text style={styles.data_text_title_top}>Common name:</Text>
            <Text style={styles.data_text_top}>{common_name}</Text>
          </View>
        </View>
        <View style={styles.favoritedetails_input}>
        <Text style={styles.favoriteText}>Recommended watering per week for this plant:</Text>
        <TextInput
          style={styles.favoritedetails_input}
          left
          label={watering_per_week}
        />
        </View>
        <View style={styles.dataDetails_buttons}>
          <Button
            color="#7BA891"
            mode="contained"
            onPress={onPressHandlerDashboard}>
            Dashboard
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
