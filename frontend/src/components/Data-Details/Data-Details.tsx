import React, {useState} from 'react';
import {
  StatusBar,
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './dataDetailsStyles';
import {Button, Switch} from 'react-native-paper';

export default function DataDetails({navigation, route}: any) {
  const onPressHandlerDashboard = () => {
    navigation.navigate('Dashboard');
  };
  const onPressHandlerFavoriteList = () => {
    navigation.navigate('FavoriteList');
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const {
    picture,
    scientific_name,
    common_name,
    recommended_temperature,
    sun_exposure,
    watering_per_week,
    soil,
    description,
  } = route.params;

  return (
    <SafeAreaView style={styles.datadetails_container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <ScrollView style={styles.datadetails_list_background}>
        <View style={styles.datadetails_item}>
          <Image source={{uri: picture}} style={styles.datadetails_default_plant_photo} />
          <View style={styles.datadetails_item2}>
            <Text style={styles.datadetails_text_title_top}>Scientific name:</Text>
            <Text style={styles.datadetails_text_top}>{scientific_name}</Text>
            <Text style={styles.datadetails_text_title_top}>Common name:</Text>
            <Text style={styles.datadetails_text_top}>{common_name}</Text>
          </View>
        </View>

        <View style={styles.datadetails_item3}>
          <Text style={styles.datadetails_text_title}>Recommended temperature:</Text>
          <Text style={styles.datadetails_text}>{recommended_temperature}</Text>
          <Text style={styles.datadetails_text_title}>Sun exposure: </Text>
          <Text style={styles.datadetails_text}>{sun_exposure}</Text>
          <Text style={styles.datadetails_text_title}>Watering per week:</Text>
          <Text style={styles.datadetails_text}>{watering_per_week}</Text>
          <Text style={styles.datadetails_text_title}>Soil: </Text>
          <Text style={styles.datadetails_text}>{soil}</Text>
          <Text style={styles.datadetails_text_title}>Description:</Text>
          <Text style={styles.datadetails_text}>{description}</Text>
        </View>
        <View style={styles.datadetails_buttons}>
          <Button
            color="#7BA891"
            mode="contained"
            onPress={onPressHandlerDashboard}>
            Dashboard
          </Button>
          <Button
            color="#7BA891"
            mode="contained"
            onPress={onPressHandlerFavoriteList}>
            Garden
          </Button>
            <Switch
              trackColor={{false: '#e0e0e0', true: 'white'}}
              thumbColor={isEnabled ? '#ffee58' : 'white'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
