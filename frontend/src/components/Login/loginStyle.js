import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    login_fixToText: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    login_loginButton: {
        marginLeft: 35
    },

    login_logo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        borderColor: 'black'
    },
    
    login_body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    login_background: {
        flex: 1,
        backgroundColor: '#dcedc8'
    },

    login_title: {
        fontSize: 40,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        margin: 10,
        marginTop: 25,
        marginBottom: 11,
        backgroundColor: 'white'
    },

    login_userData: {
        width: 250,
        height: 65,
        marginBottom: 5,
        marginTop: 5
    },
      
    login_container: {
        flex: 1,
    },

})

export default styles;