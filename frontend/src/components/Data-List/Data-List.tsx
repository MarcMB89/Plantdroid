import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadPlants} from '../../redux/actions/actions.creator';
import {
  StatusBar,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './dataListStyles';

export default function DataList({navigation}: any) {
  const plants: any = useSelector((store: any) => store.plants);
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (plants.length < 1) {
      dispatch(loadPlants());
    }
  }, [plants, dispatch]);

  return (
    <SafeAreaView style={styles.datalist_container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <View style={styles.datalist_background}>
        <View>
          <FlatList
            keyExtractor={item => item._id}
            data={plants}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DataDetails', item);
                }}>
                <View style={styles.datalist_listItem}>
                  <Image
                    source={{uri: item.picture}}
                    style={styles.datalist_default_plant_photo}
                  />
                  <View>
                    <Text style={styles.datalist_list_text_title}>Scientific name:</Text>
                    <Text style={styles.datalist_list_text}>{item.scientific_name}</Text>
                    <Text style={styles.datalist_list_text_title}>Common name:</Text>
                    <Text style={styles.datalist_list_text}>{item.common_name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
