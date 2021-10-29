import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Register from './src/components/Register/Register';
import Login from './src/components/Login/Login';
import Dashboard from './src/components/Dashboard/Dashboard';
import Profile from './src/components/Profile/Profile';
import FavoriteList from './src/components/Favorite-List/Favorite-List';
import FavoriteDetails from './src/components/Favorite-Details/Favorite-Details';
import DataDetails from './src/components/Data-Details/Data-Details';
import DataList from './src/components/Data-List/Data-List';

import configureStore from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Dashboard"
            component={Dashboard}
          />
          <Stack.Screen 
          options={{
              headerStyle: {
                backgroundColor: '#E1E2E1',
              },
              headerTintColor: '#003d00',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Profile" 
            component={Profile} 
            />
            <Stack.Screen 
          options={{
              title: 'Garden List',
              headerStyle: {
                backgroundColor: '#E1E2E1',
              },
              headerTintColor: '#003d00',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="FavoriteList" 
            component={FavoriteList} 
            />
            <Stack.Screen 
          options={{
              title: 'Garden Details',
              headerStyle: {
                backgroundColor: '#E1E2E1',
              },
              headerTintColor: '#003d00',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="FavoriteDetails" 
            component={FavoriteDetails} 
            />
          <Stack.Screen
            options={{
              title: 'Database Details',
              headerStyle: {
                backgroundColor: '#E1E2E1',
              },
              headerTintColor: '#003d00',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="DataDetails"
            component={DataDetails}
          />
          <Stack.Screen
            options={{
              title: 'Database list',
              headerStyle: {
                backgroundColor: '#E1E2E1',
              },
              headerTintColor: '#003d00',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="DataList"
            component={DataList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
