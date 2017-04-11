

import React, { Component } from 'react';

import {  
    Text
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import GirlPage from './girlPage';
import BeautifulPage from './beautifulPage';





class ChoicePage extends Component {
    static navigationOptions = {
        title: '精选'
    }
    render() {
        return (
            <ScrollableTabView 
                tabBarActiveTextColor="rgb(250,126,30)"
                tabBarUnderlineStyle={{backgroundColor: 'rgb(250,126,30)'}}>
                <GirlPage tabLabel="少女漫画" navigation={this.props.navigation}/>
                <BeautifulPage tabLabel="耽美漫画" navigation={this.props.navigation}/>
            </ScrollableTabView>
        )
    }
}

export default ChoicePage;