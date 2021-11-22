import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({   
      
    datalist_container: {
        flex: 1,
    },

    datalist_background: {
        flex: 1,
        backgroundColor: '#dcedc8',
        borderColor: '#212121',
    },

    datalist_listItem: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 2,
        margin: 5,
        borderColor: '#212121',
        backgroundColor: '#aabb97',
      },

    datalist_default_plant_photo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        margin: 10,
      },

      datalist_list_text: {
        marginLeft: 12,
        fontSize: 17,
        marginBottom: 12
      },
    
      datalist_list_text_title: {
        flex: 1, 
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
      },

})

export default styles;