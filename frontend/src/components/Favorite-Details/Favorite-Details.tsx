import React from 'react';
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './favoriteDetailsStyles';
import {Button, TextInput} from 'react-native-paper';

export default function DataDetails({navigation, route}: any) {
  const onPressHandlerDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const {
    picture,
    scientific_name,
    common_name,
    watering_per_week
  } = route.params;

  return (
    <SafeAreaView style={styles.favoritedetails_container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <ScrollView style={styles.favoritedetails_list_background}>
        <View style={styles.favoritedetails_item}>
          <Image source={{uri: picture}} style={styles.favoritedetails_default_plant_photo} />
          <View style={styles.favoritedetails_item2}>
            <Text style={styles.favoritedetails_data_text_title_top}>Scientific name:</Text>
            <Text style={styles.favoritedetails_data_text_top}>{scientific_name}</Text>
            <Text style={styles.favoritedetails_data_text_title_top}>Common name:</Text>
            <Text style={styles.favoritedetails_data_text_top}>{common_name}</Text>
          </View>
        </View>
        <View style={styles.favoritedetails_input}>
        <Text style={styles.favoritedetails_text}>Recommended watering per week for this plant:</Text>
        <TextInput
          style={styles.favoritedetails_input}
          left
          label={watering_per_week}
        />
        </View>
        <View style={styles.favoritedetails_buttons}>
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
