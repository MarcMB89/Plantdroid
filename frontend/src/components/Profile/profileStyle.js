import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    profile_fixToText: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    profile_loginButton: {
        marginLeft: 35
    },

    profile_logo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        borderColor: 'black'
    },
    
    profile_body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    profile_background: {
        flex: 1,
        backgroundColor: '#dcedc8'
    },

    profile_title: {
        fontSize: 40,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        margin: 10,
        marginTop: 25,
        marginBottom: 11,
        backgroundColor: 'white'
    },

    profile_userData: {
        width: 250,
        height: 65,
        marginBottom: 5,
        marginTop: 5
    },
      
    profile_container: {
        flex: 1,
    },

    profile_body: {
        marginTop: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      profile_photo: {
          width: 130,
          height: 130,
          borderRadius: 100,
          margin: 10,
      },
    
      profile_userData_container: {
        marginLeft: 20,
        marginRight: 100,
        marginTop: 15,
      },
    
      profile_userData: {
        marginLeft: 5,
        marginBottom: 3,
        fontWeight: 'bold',
        fontSize: 25,
      },
    
      profile_userData_text: {
        marginLeft: 5,
        fontSize: 20,
      },
    
      profile_logoutButton: {
        marginTop: 30,
        margin: 5,
      },

})

export default styles;