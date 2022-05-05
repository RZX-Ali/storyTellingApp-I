import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation/drawer';
import Profile from "../Profile";

const drawer = createDrawerNavigator();
const DrawerNavigator = () => { return (
    <Drawer.Navigator> 
    <Drawer.Screen name="Home" component= {TabNavigator} />

    <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator> ); }; export default DrawerNavigator;