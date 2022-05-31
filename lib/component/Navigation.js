import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
//..............
import { PersistGate } from 'redux-persist/integration/react'
import {store,persistor} from '../redux/store/Store'
//.............
import SearchComponent from './search-feature/Search';
import MainComp from './home-feature/Main';
import SearchHistoryComp from './feature-search-history/searchHistory'
import Fav from './feature-fav/Favourite'

const Tab = createMaterialBottomTabNavigator();
const NavigationComponent = () => {
  return (
    <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <NavigationContainer
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465">
          <Tab.Navigator shifting={true}>
            <Tab.Screen
              name="Home"
              component={MainComp}
              options={{
                tabBarLabel: 'Home',
                tabBarColor: 'red',
                tabBarIcon: ({color}) => (
                  <MaterialIcons name="home" color={color} size={25} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchComponent}
              options={{
                tabBarLabel: 'Search',
                tabBarColor: 'brown',
                tabBarIcon: ({color}) => (
                  <MaterialIcons name="search" color={color} size={25} />
                ),
              }}
            />

            <Tab.Screen
            name="Favourite"
            component={Fav}
            options={{
              tabBarLabel: 'Favourite',
              tabBarColor: '#57746a',
              tabBarIcon: ({color}) => (
                <MaterialIcons name="favorite-outline" color={color} size={25} />
              ),
            }}
          />
   
            <Tab.Screen
              name="History"
              component={SearchHistoryComp}
              options={{
                tabBarLabel: 'Histoty',
                tabBarColor: '#731877',
                tabBarIcon: ({color}) => (
                  <MaterialIcons name="history" color={color} size={25} />
                ),
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default NavigationComponent;
