import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({   
      
    datadetails_container: {
        flex: 1,
    },

    datadetails_list_background: {
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

    datadetails_item: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 2,
        margin: 5,
      },
    
    datadetails_item2: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 2,
        margin: 5,
      },
    
    datadetails_item3: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 2,
        margin: 1,
      },
    

    datadetails_default_plant_photo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        margin: 10,
      },

    datadetails_text_top: {
        marginLeft: 12,
        fontSize: 17,
        marginBottom: 12
      },
    
    datadetails_text_title_top: {
        flex: 1, 
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
      },

    datadetails_text: {
        marginTop: 5,
        marginLeft: 25,
        marginRight: 10,
        fontSize: 17,
        marginBottom: 12
      },
    
    datadetails_text_title: {
        flex: 1, 
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 25,
        marginRight: 10,
        marginTop: 5
      },

      datadetails_buttons: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      

})

export default styles;