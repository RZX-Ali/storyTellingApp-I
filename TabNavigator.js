import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation/bottom-tabs';
import Profile from "../Profile";
import CreateStory from "../screens/CreateStory";
import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

const createBottomTabNavigator = () => {
return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Feed') {
          iconName = focused
            ? 'book'
            : 'book-outline';
        } else if (route.name === 'CreateStory') {
          iconName = focused ? 'create' : 'create-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="CreateStory" component={CreateStory} />
  </Tab.Navigator>

);

}
export default bottomTabNavigator();