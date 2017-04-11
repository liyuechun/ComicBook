



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
import ChapterPage from './chapter/chapterPage';
import DetailPage from './detail/detailPage'
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from '../store/store';



// 主页
let homeNav = StackNavigator({
    HomePage: {screen: HomePage},
    ChapterPage: {screen: ChapterPage},
    DetailPage: {screen: DetailPage}
},
{
     navigationOptions: {
        tabBar: {
            label: "主页",
            icon: ({tintColor,focused}) => {
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
            }
        },
        drawer: {
            label: "主页",
            icon: ({tintColor,focused}) => {
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
            }
        },
        header: ({navigate}) => ({
            style: {backgroundColor: 'rgb(250,126,30)'},
            titleStyle: {color: 'white',fontSize: 18},
            left: Platform.OS === 'ios'? <Text style={{width: 0}}/> : 
            <TouchableHighlight onPress={() => {
                navigate('DrawerOpen');
            }}>
                <Image 
                        style={{width: 30,height:22.5,marginLeft: 5}} 
                        source={require('../images/left.png')}
                    />
            </TouchableHighlight>
        }),
        
    }
});

// 发现
let discoverNav = StackNavigator({
    DiscoverPage: {screen: DiscoverPage},
    ChapterPage: {screen: ChapterPage},
    DetailPage: {screen: DetailPage}
},
{
     navigationOptions: {
        tabBar: {
            label: "发现",
            icon: ({tintColor,focused}) => {
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
            }
        },
        drawer: {
            label: "发现",
            icon: ({tintColor,focused}) => {
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
            }
        },
        header: ({navigate}) => ({
            style: {backgroundColor: 'rgb(250,126,30)'},
            titleStyle: {color: 'white',fontSize: 18},
            left: Platform.OS === 'ios'? <Text style={{width: 0}}/> : 
            <TouchableHighlight onPress={() => {
                navigate('DrawerOpen');
            }}>
                <Image 
                        style={{width: 30,height:22.5,marginLeft: 5}} 
                        source={require('../images/left.png')}
                    />
            </TouchableHighlight>
        })
    }
});

// 精选
let choiceNav = StackNavigator({
    ChoicePage: {screen: ChoicePage},
    ChapterPage: {screen: ChapterPage},
    DetailPage: {screen: DetailPage}
},
{
     navigationOptions: {
        tabBar: {
            label: "精选",
            icon: ({tintColor,focused}) => {
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
            }
        },
        drawer: {
            label: "精选",
            icon: ({tintColor,focused}) => {
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
            }
        },
        header: ({navigate}) => ({
            style: {backgroundColor: 'rgb(250,126,30)'},
            titleStyle: {color: 'white',fontSize: 18},
            left: Platform.OS === 'ios'? <Text style={{width: 0}}/> : 
            <TouchableHighlight onPress={() => {
                navigate('DrawerOpen');
            }}>
                <Image 
                        style={{width: 30,height:22.5,marginLeft: 5}} 
                        source={require('../images/left.png')}
                    />
            </TouchableHighlight>
        })
    }
});

// 我的
let meNav = StackNavigator({
    MePage: {screen: MePage}
},
{
     navigationOptions: {
        tabBar: {
            label: "我的",
            icon: ({tintColor,focused}) => {
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
            }
        },
        drawer: {
            label: "我的",
            icon: ({tintColor,focused}) => {
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
            }
        },
        header: ({navigate}) => ({
            style: {backgroundColor: 'rgb(250,126,30)'},
            titleStyle: {color: 'white',fontSize: 18},
            left: Platform.OS === 'ios'? <Text style={{width: 0}}/> : 
            <TouchableHighlight onPress={() => {
                navigate('DrawerOpen');
            }}>
                <Image 
                        style={{width: 30,height:22.5,marginLeft: 5}} 
                        source={require('../images/left.png')}
                    />
            </TouchableHighlight>
        })
    }
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
        activeTintColor: 'rgb(250,126,30)'
    }
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
        activeTintColor: 'rgb(250,126,30)'
}

});



class Root extends Component {

    render() {
        let RootView = Platform.OS === 'ios' ? TabBar : Drawer;
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
