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

import styles from '../../styles/styles';

export default function DataList({navigation}: any) {
  const plants: any = useSelector((store: any) => store.plants);
  const dispatch: any = useDispatch();

  const favItem:any =  [{
    _id: '6138c3ee29b6164724bbb898',
    picture: "https://pfaf.org/Admin/PlantImages/OleaEuropaea.jpg",
    scientific_name: "Olea europaea",
    common_name: "Olive tree",
    watering_per_week: 4
}];

  useEffect(() => {
    if (plants.length < 1) {
      dispatch(loadPlants());
    }
  }, [plants, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#7BA891" barStyle="dark-content" />
      <View style={styles.listbackground}>
        <View>
          <FlatList
            keyExtractor={item => item._id}
            data={favItem}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FavoriteDetails', item);
                }}>
                <View style={styles.listItem}>
                  <Image
                    source={{uri: item.picture}}
                    style={styles.default_plant_photo}
                  />
                  <View>
                    <Text style={styles.list_text_title}>Scientific name:</Text>
                    <Text style={styles.list_text}>{item.scientific_name}</Text>
                    <Text style={styles.list_text_title}>Common name:</Text>
                    <Text style={styles.list_text}>{item.common_name}</Text>
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
