import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  
  favoritedetails_input: {
    margin: 20
  },

  favoriteSwitch: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginLeft: 10,
  },

  favoriteText: {
    fontSize: 15,
    flexDirection: 'column',
    textAlign: 'center'
  },

  container: {
    flex: 1,
  },

  profile_container: {
    flex: 1,
  },
  userData: {
    width: 250,
    height: 65,
    marginBottom: 5,
    marginTop: 5

  },
  card: {
    margin: 10,
    backgroundColor: '#906E51'
  },

  card_paragraph: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
   
  },

  login_fixToText: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  login_loginButton: {
    marginLeft: 35
  },

  dataDetails_buttons: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  list_text: {
    marginLeft: 12,
    fontSize: 17,
    marginBottom: 12
  },

  list_text_title: {
    flex: 1, 
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5
  },

  data_text_top: {
    marginLeft: 12,
    fontSize: 17,
    marginBottom: 12
  },

  data_text_title_top: {
    flex: 1, 
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5
  },

  data_text: {
    marginTop: 5,
    marginLeft: 25,
    marginRight: 10,
    fontSize: 17,
    marginBottom: 12
  },

  data_text_title: {
    flex: 1, 
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25,
    marginRight: 10,
    marginTop: 5
  },

  listbackground: {
    flex: 1,
    backgroundColor: '#dcedc8',
    borderColor: '#212121',
  },

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 2,
    margin: 5,
    borderColor: '#212121',
    backgroundColor: '#aabb97',
  },

  default_plant_photo: {
    width: 130,
    height: 130,
    borderRadius: 50,
    margin: 10,
  },

  details_item: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 2,
    margin: 5,
  },

  details_item2: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 2,
    margin: 5,
  },

  details_item3: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 2,
    margin: 1,
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },

  textCard: {
    margin: 5,
  },

  no_photo: {
    width: 100,
    height: 100,
  },

  background: {
    flex: 1,
    backgroundColor: '#dcedc8'
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

  button: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#7BA891',
    borderColor: '#212121',
  },
});

export default styles;
