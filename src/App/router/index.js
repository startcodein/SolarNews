import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import colors from '../../design';

import Home from '../views/Home';
import Saved from '../views/Saved';
import Settings from '../views/Settings';
import ArticleDetails from '../views/ArticleDetails';
import ArticleType from '../components/ArticleType';
import AddToFav from '../components/AddToFav';

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions:() => ({
      title: 'Home',
      headerTintColor: '#fff',
      headerRight: <ArticleType />,
      headerStyle: {
        backgroundColor: colors.iconColor,
        borderBottomWidth: 0,
      },
    }),
  },
  ArticleDetails: {
    screen: ArticleDetails,
    navigationOptions:({ navigation }) => ({
      title: 'Details',
      headerTintColor: '#fff',
      headerRight: <AddToFav params={navigation} />,
      headerStyle: {
        backgroundColor: colors.iconColor,
        borderBottomWidth: 0,
      },
    }),
  },
},{
  stackBarOptions: {
    style: {
      backgroundColor: colors.iconColor,
    },
  }
});


export const SavedStack = StackNavigator({
  Saved: {
    screen: Saved,
    navigationOptions:(navigation) => {
      console.log(navigation);
      return {
        title: 'Saved Articles',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: colors.iconColor,
          borderBottomWidth: 0,
        },
      }
    },
  },
  ArticleDetails: {
    screen: ArticleDetails,
    navigationOptions:({ navigation }) => ({
      title: 'Details',
      headerStyle: {
        backgroundColor: '#fff'
      },
    }),
  },
},{
  stackBarOptions: {
    style: {
      backgroundColor: '#FFF',
    },
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home"
                                           type='font-awesome' size={28} color={tintColor}/>
    },
  },
  Saved: {
    screen: SavedStack,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => <Icon name='heart'
                                           type='font-awesome' size={23} color={tintColor}/>
    },
  },
  Profile: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="cog" type="font-awesome" size={26} color={tintColor}/>
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.clearColor,
    style: {
      backgroundColor: '#FFF',
    },
  },
},);