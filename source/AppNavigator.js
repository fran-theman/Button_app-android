import React from 'react';
import {Text, View} from 'react-native';
import {
  TabNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  Header,
} from 'react-navigation';

import BlogPreview from './BlogPreview';
import BlogDetails from './BlogDetails';
import Perfil from './Perfil';
import HomeButtons from './HomeButtons';

const RootStack = createStackNavigator(
  {
    Home: HomeButtons,      //changeback to HomeButtons
    BlogScreen: BlogPreview,
    BlogDetailScreen: BlogDetails,
    PerfilScreen: Perfil,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;