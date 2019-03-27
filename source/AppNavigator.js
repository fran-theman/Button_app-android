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
import Info from './Info';
import Calendar from './Calendar';
import Agenda from './Agenda';
import Contacts from './Contacts';
import Wall from './Wall';
import Score from './Score';
import Patron from './Patron';

const RootStack = createStackNavigator(
  {
    Home: HomeButtons,      //changeback to HomeButtons
    BlogScreen: BlogPreview,
    BlogDetailScreen: BlogDetails,
    PerfilScreen: Perfil,
    InfoScreen: Info,
    CalendarScreen: Calendar,
    AgendaScreen: Agenda,
    ContactsScreen: Contacts,
    WallScreen: Wall,
    ScoreScreen: Score,
    PatronScreen: Patron,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;