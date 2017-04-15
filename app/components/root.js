
import React, { Component } from 'react';

import { 
    Text,
    View,
    StatusBar,
    Image,
    Platform,
    TouchableHighlight
} from 'react-native';

import HomePage from './home/homePage';
import DiscoverPage from './discover/discoverPage';
import ChoicePage from './choice/choicePage';
import MePage from './me/mePage';
import ChapterPage from './chapter/chapterPage'
import DetailPage from './detail/detailPage';

import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from '../store/store';

import { IS_TAB_STYLE } from '../config';

// 主页
let homeNav = StackNavigator({
    HomePage: {screen: HomePage},
    ChapterPage: {screen: ChapterPage },
    DetailPage: {screen: DetailPage }
},
{
        navigationOptions: ({navigation}) => {
        
         return {
            tabBarLabel: '主页',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({focused}) => {
                return (
                    focused ? <Image
                        source={require("../images/tab_home_pressed.png")}
                        style={{width: 20,height: 20}}
                    /> :
                    <Image
                        source={require("../images/tab_home_normal.png")}
                        style={{width: 20,height: 20}}
                    />
                )
            },
            drawerLabel: '主页',
            drawerIcon: ({focused}) => {
                return (
                    focused ? <Image
                        source={require("../images/tab_home_pressed.png")}
                        style={{width: 20,height: 20}}
                    /> :
                    <Image
                        source={require("../images/tab_home_normal.png")}
                        style={{width: 20,height: 20}}
                    />
                )
            },
            headerStyle: {backgroundColor: 'rgb(250,126,30)'},
            headerTitleStyle: {color: 'white',fontSize: 18},
            headerLeft: IS_TAB_STYLE ? <Image /> : 
                        <TouchableHighlight 
                            underlayColor="rgb(250,126,30)"
                            onPress={() => {
                                console.log('left button clicked');
                                navigation.navigate('DrawerOpen'); 
                            }}>
                                <Image
                                    source={require('../images/left.png')}
                                    style={{width: 25,height: 25,marginLeft: 10}}
                                />
                        </TouchableHighlight>
            }
        }
});

// 发现
let discoverNav = StackNavigator({
    DiscoverPage: {screen: DiscoverPage},
    ChapterPage: {screen: ChapterPage },
    DetailPage: {screen: DetailPage }
},
{
     navigationOptions: ({navigation}) => ({
        
        tabBarLabel: '发现',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({focused}) => {
            return (
                focused ? <Image
                    source={require("../images/tab_discover_pressed.png")}
                    style={{width: 20,height: 20}}
                /> :
                <Image
                    source={require("../images/tab_discover_normal.png")}
                    style={{width: 20,height: 20}}
                />
            )
        },
        drawerLabel: '发现',
        drawerIcon: ({focused}) => {
            return (
                focused ? <Image
                    source={require("../images/tab_discover_pressed.png")}
                    style={{width: 20,height: 20}}
                /> :
                <Image
                    source={require("../images/tab_discover_normal.png")}
                    style={{width: 20,height: 20}}
                />
            )
        },
        headerStyle: {backgroundColor: 'rgb(250,126,30)'},
        headerTitleStyle: {color: 'white',fontSize: 18},
        headerLeft: IS_TAB_STYLE ? <Image /> : 
                        <TouchableHighlight
                            underlayColor="rgb(250,126,30)" 
                            onPress={() => {
                                console.log('left button clicked');
                                navigation.navigate('DrawerOpen'); 
                            }}>
                                <Image
                                    source={require('../images/left.png')}
                                    style={{width: 25,height: 25,marginLeft: 10}}
                                />
                        </TouchableHighlight>
    })
});

// 精选
let choiceNav = StackNavigator({
    ChoicePage: {screen: ChoicePage},
    ChapterPage: {screen: ChapterPage },
    DetailPage: {screen: DetailPage }
},
{
     navigationOptions: ({navigation}) => ({
        
        tabBarLabel: '精选',
        tabBarIcon: ({focused}) => {
            return (
                focused ? <Image
                    source={require("../images/tab_choice_pressed.png")}
                    style={{width: 20,height: 20}}
                /> :
                <Image
                    source={require("../images/tab_choice_normal.png")}
                    style={{width: 20,height: 20}}
                />
            )
        },
        drawerLabel: '精选',
        drawerIcon: ({focused}) => {
            return (
                focused ? <Image
                    source={require("../images/tab_choice_pressed.png")}
                    style={{width: 20,height: 20}}
                /> :
                <Image
                    source={require("../images/tab_choice_normal.png")}
                    style={{width: 20,height: 20}}
                />
            )
        },
        headerStyle: {backgroundColor: 'rgb(250,126,30)'},
        headerTitleStyle: {color: 'white',fontSize: 18},
        headerLeft: IS_TAB_STYLE ? <Image /> : 
                        <TouchableHighlight 
                            underlayColor="rgb(250,126,30)"
                            onPress={() => {
                                console.log('left button clicked');
                                navigation.navigate('DrawerOpen'); 
                            }}>
                                <Image
                                    source={require('../images/left.png')}
                                    style={{width: 25,height: 25,marginLeft: 10}}
                                />
                        </TouchableHighlight>
    })
});

// 我的
let meNav = StackNavigator({
    MePage: {screen: MePage}
},
{
     navigationOptions: ({navigation}) => ({
        
        tabBarLabel: '我的',
        tabBarIcon: ({focused}) => {
            return (
                focused ? <Image
                    source={require("../images/tab_me_pressed.png")}
                    style={{width: 20,height: 20}}
                /> :
                <Image
                    source={require("../images/tab_me_normal.png")}
                    style={{width: 20,height: 20}}
                />
            )
        },
        drawerLabel: '我的',
        drawerIcon: ({focused}) => {
            return (
                focused ? <Image
                    source={require("../images/tab_me_pressed.png")}
                    style={{width: 20,height: 20}}
                /> :
                <Image
                    source={require("../images/tab_me_normal.png")}
                    style={{width: 20,height: 20}}
                />
            )
        },
        headerStyle: {backgroundColor: 'rgb(250,126,30)'},
        headerTitleStyle: {color: 'white',fontSize: 18},
        headerLeft: IS_TAB_STYLE ? <Image /> : 
                        <TouchableHighlight
                            underlayColor="rgb(250,126,30)" 
                            onPress={() => {
                                console.log('left button clicked');
                                navigation.navigate('DrawerOpen'); 
                            }}>
                                <Image
                                    source={require('../images/left.png')}
                                    style={{width: 25,height: 25,marginLeft: 10}}
                                />
                        </TouchableHighlight>
    })
});

// 创建TabBar
let TabBar = TabNavigator({
    home: {screen: homeNav},
    discover: {screen: discoverNav},
    choice: {screen: choiceNav},
    me: {screen: meNav}
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'rgb(250,126,30)',
        inactiveTintColor: 'rgb(142,142,143)',
        style: {
            backgroundColor: 'rgb(241,241,241)'
        }
    },
    swipeEnabled: false //是否允许tabBar手势切换
});


let Drawer = DrawerNavigator({
    home: {screen: homeNav},
    discover: {screen: discoverNav},
    choice: {screen: choiceNav},
    me: {screen: meNav}
},
{
    drawerWidth: 150,
    contentOptions: {
        activeTintColor: 'rgb(250,126,30)',
        inactiveTintColor: 'rgb(142,142,143)'
    }
});



class Root extends Component {

    render() {
        let RootView = IS_TAB_STYLE ? TabBar : Drawer;
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusBar
                        backgroundColor="rgb(250,126,30)"
                        barStyle="light-content"
                    />
                    <RootView />
                </View>
            </Provider>
            
        )
    }
}

export default Root;
