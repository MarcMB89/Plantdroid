import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({   
      
    favoritelist_container: {
        flex: 1,
    },

    favoritelist_list_background: {
        flex: 1,
        backgroundColor: '#dcedc8',
        borderColor: '#212121',
      },

    favoritelist_list_item: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 2,
        margin: 5,
        borderColor: '#212121',
        backgroundColor: '#aabb97',
      },

    favoritelist_default_plant_photo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        margin: 10,
      },

      favoritelist_list_text: {
        marginLeft: 12,
        fontSize: 17,
        marginBottom: 12
      },
    
      favoritelist_list_text_title: {
        flex: 1, 
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
      },

})

export default styles;