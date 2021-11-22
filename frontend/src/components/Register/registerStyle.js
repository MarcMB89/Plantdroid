import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    register_fixToText: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    register_loginButton: {
        marginLeft: 35
    },

    register_logo: {
        width: 130,
        height: 130,
        borderRadius: 50,
        borderColor: 'black'
    },
    
    register_body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    register_background: {
        flex: 1,
        backgroundColor: '#dcedc8'
    },

    register_title: {
        fontSize: 40,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        margin: 10,
        marginTop: 25,
        marginBottom: 11,
        backgroundColor: 'white'
    },

    register_userData: {
        width: 250,
        height: 65,
        marginBottom: 5,
        marginTop: 5
    },
      
    register_container: {
        flex: 1,
    },

})

export default styles;