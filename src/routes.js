import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';

import Main from "./pages/Main";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Register from "./pages/Register";
import Edit from "./pages/Edit";

const MenuButton = (props) => (
    <View>
        <TouchableOpacity onPress={() => props.navigate(DrawerActions.openDrawer())}>
            <Image style={{marginLeft: 10, width: 40, height: 40}} source={require("../assets/img/menu.png")}></Image>
        </TouchableOpacity>
    </View>
)

class SideMenu extends Component {
    buttonCloseDrawer = () => {
        const { navigation } = this.props;
        
        navigation.dispatch(DrawerActions.closeDrawer())
    };
    buttonAdd = () => {
        const { navigation } = this.props;
        
        navigation.navigate('Add')
    };
    buttonEdit = () => {
        const { navigation } = this.props;
        
        navigation.navigate('Edit')
    };
    buttonLogout = () => {
        const { navigation } = this.props;
        
        navigation.navigate(AppSwitchNavigator('Main'))
    };
    render() {
        return(
            <LinearGradient colors={['#EDCF07','#D6A504']} style={{flex: 1, alignItems:'center'}}>
                <View style={{alignSelf: 'flex-start', padding: 10}}>
                    <TouchableOpacity onPress={this.buttonCloseDrawer}>
                        <Image style={{width: 30, height: 30}} source={require("../assets/img/cancel.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={this.buttonAdd}>
                        <Text style={{color: '#fff', fontSize: 16}}> Adicionar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.buttonEdit}>
                        <Text style={{color: '#fff', fontSize: 16, top: 10}}> Editar </Text>
                    </TouchableOpacity>
                </View>
                <View style={{position: 'absolute', bottom: 20}}>
                    <TouchableOpacity onPress={this.buttonLogout}>
                        <Text style={{color: '#fff', fontSize: 16}}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}

const AppStackNavigator = createStackNavigator({
    Home: { screen: Home },
    Add: { screen: Add },
    Edit: { screen: Edit },
}, {
    defaultNavigationOptions:({navigation}) => ({
        headerStyle: {
            backgroundColor: '#EDCF07',
        },
        title: false,
        headerBackTitleVisible: false,
        headerTintColor: '#000000',
        headerLeft: <MenuButton navigate={navigation.dispatch}></MenuButton>
    })
})

const AppDrawerNavigator = createDrawerNavigator (
    {
        drawer: AppStackNavigator,
    },
    {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width * 3/4,
    },
)

const AppSwitchNavigator = createSwitchNavigator({
    Main: { screen: Main },
    Register: { screen: Register },
    Home: { screen: AppDrawerNavigator },
    Add: { screen: AppDrawerNavigator },
    Edit: { screen: AppDrawerNavigator},
})

const Routes = createAppContainer (

    AppSwitchNavigator,
 
 );

export default Routes; 
