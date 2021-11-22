import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({   
      
    favoritedetails_container: {
        flex: 1,
    },

    favoritedetails_list_background: {
        flex: 1,
        backgroundColor: '#dcedc8',
        borderColor: '#212121',
      },

    favoritedetails_item: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 2,
        margin: 5,
    },

    favoritedetails_item2: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 2,
        margin: 5,
      },

      favoritedetails_data_text_title_top: {
        flex: 1, 
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
      },

      favoritedetails_data_text_top: {
        marginLeft: 12,
        fontSize: 17,
        marginBottom: 12
      },

      
    favoritedetails_input: {
        margin: 20
    },

    favoritedetails_text: {
        fontSize: 15,
        flexDirection: 'column',
        textAlign: 'center'
      },

      favoritedetails_buttons: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },

    favoritedetails_default_plant_photo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        margin: 10,
      },

})

export default styles;