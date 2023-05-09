import React, {useEffect} from 'react';
import {
  StyleSheet,
  StatusBar
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movies from './src/screens/Movies';
import TvShows from './src/screens/TvShows';
import HomeDrawerNavigator from './src/navigator/DrawerNavigator';
import MovieDetails from './src/screens/MovieDetails';
import ItemsList from './src/screens/ItemsList';
import Search from './src/screens/Search';
import WebView from './src/screens/WebView';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  // const MovieStack = () => {
  //   return (
  //     <Stack.Navigator
  //       initialRouteName="Login"
  //       screenOptions={{
  //         headerTitle: false,
  //         headerTransparent: true,
  //         headerBackTitleVisible: false,
  //         headerShown: false,
  //       }}
  //     >
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeDrawerNavigator}
  //       />
  //       <Stack.Screen name="Movies" component={Movies} />
  //       <Stack.Screen name="TvShows" component={TvShows} />
  //       <Stack.Screen name="MovieDetails" component={MovieDetails} />
  //       <Stack.Screen name="ItemsList" component={ItemsList} />
  //       <Stack.Screen name="Search" component={Search} />
  //       <Stack.Screen name="WebView" component={WebView} />
  //     </Stack.Navigator>
  //   );
  // }

  // const BottomNavbarStack = () => {
  //   return (
  //     <Tab.Navigator
  //       initialRouteName="MovieStack"
  //       screenOptions={{
  //         tabBarActiveTintColor: '#e91e63',
  //       }}
  //     >
  //       <Tab.Screen
  //         name="MovieStack"
  //         component={MovieStack}
  //         options={{
  //           tabBarLabel: 'Home',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialCommunityIcons name="home" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Notifications"
  //         component={MovieStack}
  //         options={{
  //           tabBarLabel: 'Updates',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialCommunityIcons name="bell" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Profile"
  //         component={MovieStack}
  //         options={{
  //           tabBarLabel: 'Profile',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialCommunityIcons name="account" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }

  return (<>
    <StatusBar backgroundColor={'transparent'} translucent={true}/>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Movies"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TvShows"
          component={TvShows}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={Signup}/> */}
        {/* <Stack.Screen name="MovieStack" component={BottomNavbarStack}/> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  </>);
};

const styles = StyleSheet.create({});

export default App;
